import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NavigationComponent } from './navigation/navigation.component';
import { CubeComponent } from './threejs/cube/cube.component';
import { NgChartComponent } from './ng-chart/ng-chart.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    NgxChartsModule
  ],
  declarations: [NavigationComponent, CubeComponent, NgChartComponent],
  exports: [CubeComponent, NgChartComponent, NgxChartsModule]
})
export class SharedModule {}
