import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleChartComponent } from './sample-chart.component';

const routes: Routes = [
  {
    path: '',
    component: SampleChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleChartRoutingModule {}
