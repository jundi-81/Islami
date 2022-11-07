import { Component } from '@angular/core';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
 public appPages = [
    { title: 'الرئيسية', url: '/scholars', icon: 'home' },
    { title: 'الأناشيد', url: '/anashid', icon: 'home' },
  ];
  public labels = ['اتصل بنا', 'مشاركة البرنامج', 'برنامج أذاني'];

  private sharing: SocialSharing;
  private url: string;

  constructor(private socialSharing: SocialSharing) {
    this.sharing = socialSharing;
    this.url = 'https://play.google.com/store/apps/details?id=com.aicpa';
}

  onClick(index: number){
    switch(index){
      case 0:
        console.log('0');
        this.socialSharing.shareViaEmail('', 'إسلامي', ['jundi-81@hotmail.com']).then(() => {
          // Success!
        }).catch(() => {
          // Error!
        });
        break;
        case 1:
          console.log('1');
          this.socialSharing.shareViaWhatsApp('share toPhone', this.url, null).then((res) => {
            console.log('image shared with whatsapp');
          }).catch((e) => {
            console.error('social share, something went wrong!', e);
          });
          break;
          case 2:
            console.log('2');
          this.socialSharing.shareViaWhatsApp('share toPhone', this.url, null).then((res) => {
            console.log('image shared with whatsapp');
          }).catch((e) => {
            console.error('social share, something went wrong!', e);
          });
          break;
    }
  }
}
