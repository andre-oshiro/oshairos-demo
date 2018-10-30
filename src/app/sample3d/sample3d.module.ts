import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { Sample3dRoutingModule } from './sample3d-routing.module';
import { Sample3dComponent } from './sample3d.component';

@NgModule({
  imports: [CommonModule, Sample3dRoutingModule, SharedModule],
  declarations: [Sample3dComponent]
})
export class Sample3dModule {}
