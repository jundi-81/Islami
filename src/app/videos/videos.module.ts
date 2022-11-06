import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideosPageRoutingModule } from './videos-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { VideosPage } from './videos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideosPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [VideosPage]
})
export class VideosPageModule {}
