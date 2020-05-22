import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visitor-pass',
  templateUrl: './visitor-pass.page.html',
  styleUrls: ['./visitor-pass.page.scss'],
})
export class VisitorPassPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
