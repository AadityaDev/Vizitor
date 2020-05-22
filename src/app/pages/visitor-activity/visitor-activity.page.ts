import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visitor-activity',
  templateUrl: './visitor-activity.page.html',
  styleUrls: ['./visitor-activity.page.scss'],
})
export class VisitorActivityPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  visitiorActivity(activity: string) {
    console.log('clikced');
    this.router.navigateByUrl('/visitor-form');
  }

}
