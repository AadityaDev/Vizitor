import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visitor-form',
  templateUrl: './visitor-form.page.html',
  styleUrls: ['./visitor-form.page.scss'],
})
export class VisitorFormPage implements OnInit {

  q1;
  q2;
  isValid: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  basicFormFill() {

  }

  userForm() {

  }

}
