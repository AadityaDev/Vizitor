import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { CustomHttpParamEncoder } from '../custom-encoder';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'http://13.234.203.187:8001/v1/';
  toast;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private toastCtrl: ToastController) {

  }

  getOTP(data): Observable<any> {
    const res = this.http.get<any>(this.apiUrl + 'login' + '?phoneNo=' + data)
    .pipe(
      tap(_ => this.log('login')),
      catchError(this.handleError('login', []))
    );
    return res;
  }

  otpVerify(data): Observable<any> {
    const formData: any = new FormData();
    for (const key of Object.keys(data)) {
      console.log(key + ' -> ' + data[key]);
      formData.append(key, data[key] + '');
    }
    console.log('da: ' + formData.get('phoneNo'));
    // console.log('all', );
    const params = new HttpParams({
      encoder: new CustomHttpParamEncoder(),
      fromObject: {
        phoneNo: data.phoneNo,
        otp: data.otp,
        countryCode: data.countryCode,
        country: data.country,
        timeZone: data.timeZone
      }
    });
    const res = this.http.post<any>(this.apiUrl + 'login', params)
    .pipe(
      tap(_ => this.log('otpVerify')),
      catchError(this.handleError('otpVerify', []))
    );
    return res;
  }

  logout(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'logout')
      .pipe(
        tap(_ => this.log('logout')),
        catchError(this.handleError('logout', []))
      );
  }

  getNDA(): Observable<any>  {
    return this.http.get<any>(this.apiUrl + 'configNda')
      .pipe(
        tap(_ => this.log('getNDA')),
        catchError(this.handleError('getNDA', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return async (error: any): Promise<Observable<T>> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      await this.presentToast('some error occured!!!', 'middle', 3000);

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
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

  standardEncoding(v: string): string {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
  }

}
