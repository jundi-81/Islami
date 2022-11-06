import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { Artist } from '../video';
import { LoadingController } from '@ionic/angular';
import { PipeTransform } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.page.html',
  styleUrls: ['./albums.page.scss'],
})
export class AlbumsPage implements OnInit {
  public albums: any[];
  public artist: Artist;
  public term: string;
  private router: Router;
  private loading;

  constructor(router: Router, services: ServicesService, private loadingCtrl: LoadingController) {
    this.router = router;
    this.artist = history.state.artist;

    this.showLoading();

    services.getAlbums(this.artist.url).subscribe({
      next: (data)=> {this.albums = data;},
      error: (error)=> {console.log(error);},
      complete: ()=> {this.stopLoading();}
    });
    //this.albums.sort((a,b) => a.Title.localeCompare(b.Title));

 }

   async showLoading() {
     this.loading = await this.loadingCtrl.create({
      message: 'يرجى الإنتظار',
      spinner: 'circles',
    });

    this.loading.present();
  }

  stopLoading(){
    this.loading.dismiss();
  }

  ngOnInit() {
  }

  navigate(album: any){
    console.log(album);
    this.router.navigateByUrl('/videos', { state: { title: album.Title, artist:this.artist, videos: album.Videos } });
  }

  filterItems(searchTerm) {
    return this.albums.filter(item => item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
  }
}
