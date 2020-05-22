import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitorScannerPage } from './visitor-scanner.page';

const routes: Routes = [
  {
    path: '',
    component: VisitorScannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitorScannerPageRoutingModule {}
