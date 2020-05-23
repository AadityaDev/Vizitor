import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-visitor-form',
  templateUrl: './visitor-form.page.html',
  styleUrls: ['./visitor-form.page.scss'],
})
export class VisitorFormPage implements OnInit {

  q1;
  q2;
  isValid: boolean = false;
  action: string;
  checkIn = {
    token: '',
    hostEmail: '',
    hostMobile: '',
    checkInTime: '',
    empId: '',
    image: '',
    fields: '',
    ndaSigned: false
  };

  constructor(private route: ActivatedRoute, private location: Location, private router: Router) {
    this.action = 'checkin';
    if (this.router.getCurrentNavigation().extras.state) {
      this.action = this.router.getCurrentNavigation().extras.state.action;
    } else {
      this.location.back();
    }
  }

  ngOnInit() {
  }

  basicFormFill() {

  }

  userForm() {

  }

}
