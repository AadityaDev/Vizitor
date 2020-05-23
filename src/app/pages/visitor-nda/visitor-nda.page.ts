import { AuthService } from '../../servies/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Config } from '../../models/config/config';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-visitor-nda',
  templateUrl: './visitor-nda.page.html',
  styleUrls: ['./visitor-nda.page.scss'],
})
export class VisitorNdaPage implements OnInit {

  public config: Config = new Config();
  loadingFormRows = [1,2,3,4,5,6,7,8,9,10];
  toast;

  constructor(private authService: AuthService, private router: Router, private toastCtrl: ToastController ) { 
    this.getNDA();
  }

  ngOnInit() {
  }

  async getNDA() {
    const companyToken = localStorage.getItem('companyToken');
    const result: any = await this.authService.getNDA(companyToken).toPromise();
    console.log('result is: ' + result);
    if (result && result.success && result.data) {
      const { camera, formFields, ndaDoc } = result.data;
      this.config.setCamera(camera);
      this.config.setFormFields(formFields);
      this.config.setNdaDoc(ndaDoc);
    } else {
      await this.presentToast('some error occured!!!', 'middle', 1500);
    }
  }

  async ndaSigned() {
    if (this.config && this.config.getFormFields()) {
      const requiredField: any = this.config.getFormFields().filter((item: any) =>
        (item && item.isRequiredField && (item.isRequiredField === true))
      ).length > 0 ? this.config.getFormFields().filter((item: any) =>
        (item && item.isRequiredField && (item.isRequiredField === true))
      )[0] : null;
      if (requiredField && requiredField.displayName) {
        await this.presentToast(`${requiredField.displayName} is missing!!!`, 'middle', 1500);
      } else {
        this.router.navigateByUrl('/visitor-activity');
      }
    } else {
      await this.presentToast('some error occured!!!', 'middle', 1500);
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

}
