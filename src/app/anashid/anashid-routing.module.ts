import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnashidPage } from './anashid.page';

const routes: Routes = [
  {
    path: '',
    component: AnashidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnashidPageRoutingModule {}
