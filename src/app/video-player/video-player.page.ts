import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.page.html',
  styleUrls: ['./video-player.page.scss'],
})

export class VideoPlayerPage implements OnInit {
  public videoUrl: any;
  public accordionExpanded: boolean;
  public showReservationAccordion: boolean;
  public safeVideoUrl: any;

  constructor(public sanitizer: DomSanitizer) {
    this.videoUrl = this.getSafeVideoUrl(history.state.videoId);
    this.showReservationAccordion = true;
    this.accordionExpanded= true;

    console.log(this.videoUrl);
  }

  getSafeVideoUrl(videoId: string) {
		return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + videoId + '?&autoplay=1');
	}

  ngOnInit() {
  }

}
