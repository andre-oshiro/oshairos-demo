import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SampleChartRoutingModule } from './sample-chart-routing.module';
import { SampleChartComponent } from './sample-chart.component';

@NgModule({
  imports: [CommonModule, SampleChartRoutingModule, SharedModule],
  declarations: [SampleChartComponent]
})
export class SampleChartModule {}
