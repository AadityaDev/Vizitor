import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitorPassPage } from './visitor-pass.page';

const routes: Routes = [
  {
    path: '',
    component: VisitorPassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitorPassPageRoutingModule {}
