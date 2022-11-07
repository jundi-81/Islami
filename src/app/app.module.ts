import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SafeSanitizerPipePipe } from './safe-sanitizer-pipe-pipe.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';

@NgModule({
  declarations: [AppComponent, SafeSanitizerPipePipe],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,
    Ng2SearchPipeModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, SocialSharing, FirebaseX],
  bootstrap: [AppComponent],
})
export class AppModule {}
