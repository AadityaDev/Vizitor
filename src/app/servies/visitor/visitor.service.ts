import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  apiUrl = 'http://localhost:3000/api/';
  toast;

  constructor(private http: HttpClient, private toastCtrl: ToastController) {

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

  private handleError<T> (operation = 'operation', result?: T) {
    return async (error: any): Promise<Observable<T>> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      await this.presentToast('some error occured!!!', 'middle', 1500);

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
