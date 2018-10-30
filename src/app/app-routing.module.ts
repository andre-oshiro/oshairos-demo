import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavigationComponent } from './shared/navigation/navigation.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: NavigationComponent,
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'sample-chart',
    component: NavigationComponent,
    loadChildren: './sample-chart/sample-chart.module#SampleChartModule'
  },
  {
    path: 'sample3d',
    component: NavigationComponent,
    loadChildren: './sample3d/sample3d.module#Sample3dModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
