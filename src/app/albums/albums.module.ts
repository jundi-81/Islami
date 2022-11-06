import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlbumsPageRoutingModule } from './albums-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AlbumsPage } from './albums.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlbumsPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [AlbumsPage]
})
export class AlbumsPageModule {}
