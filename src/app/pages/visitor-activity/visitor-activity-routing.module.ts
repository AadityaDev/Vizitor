import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitorActivityPage } from './visitor-activity.page';

const routes: Routes = [
  {
    path: '',
    component: VisitorActivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitorActivityPageRoutingModule {}
