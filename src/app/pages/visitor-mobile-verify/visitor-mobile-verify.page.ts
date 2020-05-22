import { AuthService } from '../../servies/auth/auth.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import data from '../../../assets/data.json';
import { FlagListComponent } from '../../components/flag-list/flag-list.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Config } from '../../models/config/config';

@Component({
  selector: 'app-visitor-mobile-verify',
  templateUrl: './visitor-mobile-verify.page.html',
  styleUrls: ['./visitor-mobile-verify.page.scss'],
})
export class VisitorMobileVerifyPage implements OnInit {

  isVerified = true;
  OTP: string = '';
  showOTPInput: boolean = false;
  OTPmessage: string = 'An OTP is sent to your number. You should receive it in 30 s';
  mobile: string;
  countryCode: string = '91';
  countries: [];
  toast;
  otpVerification = {
    phoneNo: '',
    otp: '',
    countryCode: '',
    country: '',
    timeZone: ''
  };
  config: Config;

  constructor(private authService: AuthService, private toastCtrl: ToastController, private router: Router) {
    this.countries = data;
    this.config = new Config();
  }

  ngOnInit() {
  }

  async goToActivityPage() {
    if (this.mobile && this.mobile.length === 10) {
      this.showOTPInput = true;
      const fa = '%2B' + this.countryCode + this.mobile;
      const result: any = await this.authService.getOTP(fa).toPromise();
      if (result && result.success && result.data && result.data.otpSent) {
        console.log('success is: ' + result['success'] + ' OTP: '+  result['data']['otpSent']);
      } else {
        await this.presentToast('some error occured!!!', 'middle', 3000);
      }
    } else {
      await this.presentToast('mobile number is invalid!!!', 'middle', 3000);
    }
  }

  async presentToast(message, position, duration) {
    this.toast = await this.toastCtrl.create({
      message,
      duration,
      position,
    });
    this.toast.present();
  }

  next() {
    this.goToActivityPage();
  }

  start() {

  }

  stop() {

  }

  processSMS(data) {
    // Check SMS for a specific string sequence to identify it is you SMS
    // Design your SMS in a way so you can identify the OTP quickly i.e. first 6 letters
    // In this case, I am keeping the first 6 letters as OTP
    const message = data.body;
    // if (message && message.indexOf('enappd_starters') != -1) {
    //   this.OTP = data.body.slice(0, 6);
    //   console.log(this.OTP);
    //   this.OTPmessage = 'OTP received. Proceed to register'
    //   this.stop();
    // }
  }

  async verifyOTP() {
    if (this.OTP !== '' && this.OTP !== null) {
      this.otpVerification.countryCode = '91';
      this.otpVerification.phoneNo = '+' + this.countryCode + this.mobile;
      this.otpVerification.otp = this.OTP + '';
      this.otpVerification.country = 'India';
      this.otpVerification.timeZone = 'Asia/Kolkata';
      const result: any = await this.authService.otpVerify(this.otpVerification).toPromise();
      if (result && result.success && result.data && result.data.token) {
        // console.log(`result is: ${result}`);
        localStorage.setItem('token', result.data.token);
        this.router.navigateByUrl('/visitor-activity');
      }
    } else {
      this.presentToast('Your OTP is not valid', 'bottom', 1500);
    }
  }

  getCountry(selectedCountryObject: any){
    console.log(selectedCountryObject);
  }

  getNumber(enteredNumberObject: any){
    console.log(enteredNumberObject.mobile);
  }
}
