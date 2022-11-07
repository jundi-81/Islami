import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { Artist } from '../video';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';

@Component({
  selector: 'app-scholars',
  templateUrl: './scholars.page.html',
  styleUrls: ['./scholars.page.scss'],
})
export class ScholarsPage implements OnInit {
  public artists: Artist[];
  private router: Router;
  private firebaseX: FirebaseX;

  constructor(firebase: FirebaseX, route: Router, services: ServicesService) {
       services.getArtists().subscribe(data=> this.artists = data);
       this.router = route;
       this.firebaseX = firebase;
    }

  ngOnInit() {
    this.firebaseX.getToken()
    .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
    .catch(error => console.error('Error getting token', error));

    this.firebaseX.onMessageReceived()
      .subscribe(data => console.log(`User opened a notification ${data}`));

    this.firebaseX.onTokenRefresh()
    .subscribe((token: string) => console.log(`Got a new token ${token}`));
  }

  navigate(selectedArtist: Artist){
    this.router.navigateByUrl('/albums', { state: { artist: selectedArtist } });
  }
}
