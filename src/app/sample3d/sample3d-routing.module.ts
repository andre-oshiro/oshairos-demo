import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sample3dComponent } from './sample3d.component';

const routes: Routes = [
  {
    path: '',
    component: Sample3dComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sample3dRoutingModule {}
