import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitorFormPageRoutingModule } from './visitor-form-routing.module';

import { VisitorFormPage } from './visitor-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitorFormPageRoutingModule
  ],
  declarations: [VisitorFormPage]
})
export class VisitorFormPageModule {}
