import { Injectable } from '@angular/core';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Artist } from './video';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private artists: Artist[];
  private audios: any[];
  private videos: any[];

  constructor(public http: HttpClient) {
      this.artists = null;
      this.audios = null;
      this.videos = null;
  }

  public getArtists(): Observable<Artist[]> {
      return this.http.get<Artist[]>('https://api.npoint.io/2da42446a7233586ff7e');
  }

  public getAlbums(url: string): Observable<any[]> {
    console.log(url);
    return this.http.get<any[]>(url);
}

  public getAnashid(): Observable<any[]> {
      return this.http.get<any[]>('https://api.npoint.io/76138c199c1759c85654');
  }

  public getSharedArtists(): any[] {
      return this.artists;
  }

  public setSharedArtists(data: any[]) {
      this.artists = data;
  }

  public getSharedAudios(): any[] {
      return this.audios;
  }

  public setSharedAudios(data: any[]) {
      this.audios = data;
  }

  public getSharedVideos(): any[] {
      return this.videos;
  }

  public setSharedVideos(data: any[]) {
      this.videos = data;
  }

  public getArtistById(id: number) {
      return this.artists.filter(artist => artist.id === id);
  }
}
