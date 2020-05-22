import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitorScannerPageRoutingModule } from './visitor-scanner-routing.module';

import { VisitorScannerPage } from './visitor-scanner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitorScannerPageRoutingModule
  ],
  declarations: [VisitorScannerPage]
})
export class VisitorScannerPageModule {}
