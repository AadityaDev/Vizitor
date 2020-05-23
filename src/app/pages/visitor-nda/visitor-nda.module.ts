import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitorNdaPageRoutingModule } from './visitor-nda-routing.module';

import { VisitorNdaPage } from './visitor-nda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitorNdaPageRoutingModule
  ],
  declarations: [VisitorNdaPage]
})
export class VisitorNdaPageModule {}
