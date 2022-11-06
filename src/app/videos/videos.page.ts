import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { Artist } from '../video';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {
  public videos: any[];
  public artist: Artist;
  public title: string;
  public term: string;
  private route: ActivatedRoute;
  private router: Router;

  constructor(route: ActivatedRoute, router: Router, services: ServicesService, private loadingCtrl: LoadingController) {
    this.route = route;
    this.router = router;

    console.log(history.state);

    this.title = history.state.title;
    this.videos = history.state.videos;
    this.artist = history.state.artist;
 }

  ngOnInit() {

  }

  play(id: string){
    console.log(id);
    this.router.navigateByUrl('/video-player', { state: { videoId: id } });
  }

}
