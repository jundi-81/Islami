import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { Artist } from '../video';

@Component({
  selector: 'app-anashid',
  templateUrl: './anashid.page.html',
  styleUrls: ['./anashid.page.scss'],
})
export class AnashidPage implements OnInit {
  public artists: Artist[];
  private router: Router;

  constructor(route: Router, services: ServicesService) {
    services.getAnashid().subscribe(data=> this.artists = data);
    this.router = route;
 }

  ngOnInit() {
  }

  navigate(selectedArtist: Artist){
    this.router.navigateByUrl('/albums', { state: { artist: selectedArtist } });
  }

}
