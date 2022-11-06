import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScholarsPageRoutingModule } from './scholars-routing.module';

import { ScholarsPage } from './scholars.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScholarsPageRoutingModule
  ],
  declarations: [ScholarsPage]
})
export class ScholarsPageModule {}
