import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitorFormPage } from './visitor-form.page';

const routes: Routes = [
  {
    path: '',
    component: VisitorFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitorFormPageRoutingModule {}
