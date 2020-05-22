import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitorPassPageRoutingModule } from './visitor-pass-routing.module';

import { VisitorPassPage } from './visitor-pass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitorPassPageRoutingModule
  ],
  declarations: [VisitorPassPage]
})
export class VisitorPassPageModule {}
