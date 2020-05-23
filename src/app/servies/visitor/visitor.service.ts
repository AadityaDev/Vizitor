import { CustomHttpParamEncoder } from '../custom-encoder';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  apiUrl = 'http://localhost:3000/api/';
  toast;

  constructor(private http: HttpClient, private router: Router, private toastCtrl: ToastController) {

  }

  checkIn(body): Observable<any>  {
    return this.http.post<any>(this.apiUrl + 'visitorCheckIn', body)
      .pipe(
        tap(_ => this.log('visitorCheckIn')),
        catchError(this.handleError('visitorCheckIn', []))
      );
  }

  checkOut(): Observable<any>  {
    return this.http.get<any>(this.apiUrl + 'visitorCheckOut')
      .pipe(
        tap(_ => this.log('visitorCheckOut')),
        catchError(this.handleError('visitorCheckOut', []))
      );
  }

  refreshToken(refreshToken): Observable<any> {
    // const refreshToken = localStorage.getItem('refreshToken');
      const params = new HttpParams({
        encoder: new CustomHttpParamEncoder(),
        fromObject: {
          refreshToken,
        }
      });
      const res = this.http.post<any>(this.apiUrl + 'token', params)
      .pipe(
        tap(_ => this.log('refreshToken')),
        catchError(this.handleError('refreshToken', []))
      );
    return res;
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return async (error: any): Promise<Observable<T>> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      if (error && error.status === 401) {
        // await this.presentToast('some error occured!!!', 'middle', 3000);
        const refreshToken = localStorage.getItem('refreshToken');
        const res: any = await this.refreshToken(refreshToken).toPromise();
        console.log(`result is: ${res}`);
        if (res && res.data && res.data.token) {
          localStorage.setItem('refreshToken', res.data.token);
        } else {
          localStorage.clear();
          this.router.navigateByUrl('/visitor-mobile-verify');
        }
      } else {
        await this.presentToast('some error occured!!!', 'middle', 3000);
      }

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }

  async presentToast(message, position, duration) {
    this.toast = await this.toastCtrl.create({
      message,
      duration,
      position,
    });
    this.toast.present();
  }
}
