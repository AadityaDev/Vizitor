import { Component, OnInit } from '@angular/core';
import { Config } from '../../models/config/config';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { VisitorService } from '../../servies/visitor/visitor.service';

@Component({
  selector: 'app-visitor-activity',
  templateUrl: './visitor-activity.page.html',
  styleUrls: ['./visitor-activity.page.scss'],
})
export class VisitorActivityPage implements OnInit {

  config: Config;
  toast;

  constructor(private router: Router, private toastCtrl: ToastController, private visitorService: VisitorService) {
    this.config = new Config();
    console.log('constructor: ');
  }

  async ngOnInit() {

  }

  visitiorActivity(activity: string) {
    console.log('clikced');
    switch (activity) {
      case 'checkin':
        this.visitorCheckIn();
        break;
      case 'checkin':
        this.visitorCheckIn();
        break;
      case 'checkin':
        this.visitorCheckIn();
        break;
      default:
        break;
    }
  }

  visitorCheckIn() {
    this.router.navigateByUrl('/visitor-form');
  }

  visitorCheck() {
    this.router.navigateByUrl('/visitor-form');
  }

  visitorCheckOut() {
    this.router.navigateByUrl('/visitor-form');
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
