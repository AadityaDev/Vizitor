import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitorMobileVerifyPageRoutingModule } from './visitor-mobile-verify-routing.module';

import { VisitorMobileVerifyPage } from './visitor-mobile-verify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitorMobileVerifyPageRoutingModule
  ],
  declarations: [VisitorMobileVerifyPage]
})
export class VisitorMobileVerifyPageModule {}
