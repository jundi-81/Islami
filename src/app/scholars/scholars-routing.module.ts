import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScholarsPage } from './scholars.page';

const routes: Routes = [
  {
    path: '',
    component: ScholarsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScholarsPageRoutingModule {}
