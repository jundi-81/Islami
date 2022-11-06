import { Component } from '@angular/core';
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
  public labels = ['اتصل بنا', 'مشاركة البرنامج'];
  constructor() {}
}
