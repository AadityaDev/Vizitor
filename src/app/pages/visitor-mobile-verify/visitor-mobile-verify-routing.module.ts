import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitorMobileVerifyPage } from './visitor-mobile-verify.page';

const routes: Routes = [
  {
    path: '',
    component: VisitorMobileVerifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitorMobileVerifyPageRoutingModule {}
