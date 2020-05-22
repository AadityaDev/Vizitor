import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FlagListComponent } from './components/flag-list/flag-list.component';

// redirectTo: 'visitor-scanner',
// redirectTo: 'visitor-mobile-verify',

const routes: Routes = [
  {
    path: '',
    redirectTo: 'visitor-mobile-verify',
    pathMatch: 'full'
  },
  {
    path: 'visitor-scanner',
    loadChildren: () => import('./pages/visitor-scanner/visitor-scanner.module').then( m => m.VisitorScannerPageModule)
  },
  {
    path: 'visitor-form',
    loadChildren: () => import('./pages/visitor-form/visitor-form.module').then( m => m.VisitorFormPageModule)
  },
  {
    path: 'visitor-pass',
    loadChildren: () => import('./pages/visitor-pass/visitor-pass.module').then( m => m.VisitorPassPageModule)
  },
  {
    path: 'visitor-mobile-verify',
    loadChildren: () => import('./pages/visitor-mobile-verify/visitor-mobile-verify.module').then( m => m.VisitorMobileVerifyPageModule)
  },
  {
    path: 'visitor-activity',
    loadChildren: () => import('./pages/visitor-activity/visitor-activity.module').then( m => m.VisitorActivityPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
