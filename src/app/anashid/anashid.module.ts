import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnashidPageRoutingModule } from './anashid-routing.module';

import { AnashidPage } from './anashid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnashidPageRoutingModule
  ],
  declarations: [AnashidPage]
})
export class AnashidPageModule {}
