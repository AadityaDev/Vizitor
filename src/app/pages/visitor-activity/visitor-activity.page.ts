import { AuthService } from '../../servies/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Config } from '../../models/config/config';
import { Router } from '@angular/router';
import { VisitorService } from '../../servies/visitor/visitor.service';

@Component({
  selector: 'app-visitor-activity',
  templateUrl: './visitor-activity.page.html',
  styleUrls: ['./visitor-activity.page.scss'],
})
export class VisitorActivityPage implements OnInit {

  config: Config;

  constructor(private authService: AuthService, private router: Router, private visitorService: VisitorService) {
    this.config = new Config();
    console.log('constructor: ');
  }

  async ngOnInit() {
    const result: any = await this.authService.getNDA().toPromise();
    console.log('result is: ' + result);
    if (result && result.success && result.data) {

    }
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

}
