import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitorActivityPageRoutingModule } from './visitor-activity-routing.module';

import { VisitorActivityPage } from './visitor-activity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitorActivityPageRoutingModule
  ],
  declarations: [VisitorActivityPage]
})
export class VisitorActivityPageModule {}
