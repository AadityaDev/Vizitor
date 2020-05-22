import { AuthService } from '../../servies/auth/auth.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
declare var SMSReceive: any;
import data from '../../../assets/data.json';
import { FlagListComponent } from '../../components/flag-list/flag-list.component';

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
  mobile: number;
  countryCode: number;
  countries: [];

  constructor(private authService: AuthService, private toastCtrl: ToastController, private router: Router) {
    this.countries = data;
  }

  ngOnInit() {
  }

  goToActivityPage() {
    if (this.isVerified) {
      this.authService.otpVerify(this.countryCode+this.mobile)
      .subscribe(res => {
        console.log('res is: ' + res);
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.router.navigate(['book']);
        }
      }, (err) => {
        console.log(err);
      });
      this.router.navigateByUrl('/visitor-activity');
    }
  }

  async presentToast(message, show_button, position, duration) {
    // const toast = await this.toastCtrl.create({
    //   message: message,
    //   showCloseButton: show_button,
    //   position: position,
    //   duration: duration
    // });
    // toast.present();
  }

  next() {
    this.showOTPInput = true;
    this.start();
  }

  start() {
    SMSReceive.startWatch(
      () => {
        console.log('watch started');
        document.addEventListener('onSMSArrive', (e: any) => {
          console.log('onSMSArrive()');
          var IncomingSMS = e.data;
          console.log('sms.address:' + IncomingSMS.address);
          console.log('sms.body:' + IncomingSMS.body);
          /* Debug received SMS content (JSON) */
          console.log(JSON.stringify(IncomingSMS));
          this.processSMS(IncomingSMS);
        });
      },
      () => { console.log('watch start failed') }
    )
  }

  stop() {
    SMSReceive.stopWatch(
      () => { console.log('watch stopped') },
      () => { console.log('watch stop failed') }
    )
  }

  processSMS(data) {
    // Check SMS for a specific string sequence to identify it is you SMS
    // Design your SMS in a way so you can identify the OTP quickly i.e. first 6 letters
    // In this case, I am keeping the first 6 letters as OTP
    const message = data.body;
    if (message && message.indexOf('enappd_starters') != -1) {
      this.OTP = data.body.slice(0, 6);
      console.log(this.OTP);
      this.OTPmessage = 'OTP received. Proceed to register'
      this.stop();
    }
  }

  register() {
    if (this.OTP != '') {
      this.presentToast('You are successfully registered', false, 'top', 1500);
    } else {
      this.presentToast('Your OTP is not valid', false, 'bottom', 1500);
      this.router.navigateByUrl('/visitor-activity');
    }
  }

  getCountry(selectedCountryObject: any){
    console.log(selectedCountryObject);
  }

  getNumber(enteredNumberObject: any){
    console.log(enteredNumberObject.mobile);
  }
}
