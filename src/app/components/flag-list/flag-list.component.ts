import { Component, OnInit } from '@angular/core';
import data from '../../../assets/data.json';

@Component({
  selector: 'app-flag-list',
  templateUrl: './flag-list.component.html',
  styleUrls: ['./flag-list.component.scss'],
})
export class FlagListComponent implements OnInit {

  countries: [] = data;
  text: string;
  input: string;
  ngOnInit() {}

  constructor() {
  }

  onInputChange() {
    this.countries = data.filter((item) => {
      return item.name.toLowerCase().indexOf(this.input.toLowerCase()) > -1
    });
  }

  onItemClick(item) {
    console.log(`item clicked is: ${item}`);
    // this.viewCtrl.dismiss({item: item})
  }

}
