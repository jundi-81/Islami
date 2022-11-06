import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { Artist } from '../video';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';

@Component({
  selector: 'app-scholars',
  templateUrl: './scholars.page.html',
  styleUrls: ['./scholars.page.scss'],
})
export class ScholarsPage implements OnInit {
  public artists: Artist[];
  private router: Router;

  constructor(route: Router, services: ServicesService) {
       services.getArtists().subscribe(data=> this.artists = data);
       this.router = route;
    }

  ngOnInit() {
    // Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
    /*
    PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        console.log('granted');
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
        console.log('after push notification');
      } else {
        // Show some error
        console.log('error');
      }
    });
    */
    PushNotifications.addListener('registration', (token: Token) => {
      alert('Push registration success, token: ' + token.value);
    });

    PushNotifications.addListener('registrationError', (error: any) => {
      alert('Error on registration: ' + JSON.stringify(error));
    });

    PushNotifications.addListener(
      'pushNotificationReceived',
      (notification: PushNotificationSchema) => {
        alert('Push received: ' + JSON.stringify(notification));
      },
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        alert('Push action performed: ' + JSON.stringify(notification));
      },
    );
  }

  navigate(selectedArtist: Artist){
    this.router.navigateByUrl('/albums', { state: { artist: selectedArtist } });
  }
}
