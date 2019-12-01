import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'ข่าวสาร',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'ติดตามงาน',
      url: '/task',
      icon: 'folder-open'
    }
  ];

  public appPages2 = [
    {
      title: 'จัดการกลุ่มกระบวนการ',
      url: '/process-group',
      icon: 'flag'
    },
    {
      title: 'จัดการกระบวนการ',
      url: '/process',
      icon: 'star'
    },
    {
      title: 'จัดการเรื่อง',
      url: '/case',
      icon: 'git-branch'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
