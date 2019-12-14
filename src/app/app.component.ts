import { Router } from '@angular/router';
import { SessionService } from './service/session/session.service';
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
      title: 'หน้าหลัก',
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
      title: 'จัดการรูปแบบ',
      url: '/process-group',
      icon: 'flag'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router,
    private SessionService:SessionService
  ) {
    this.initializeApp();
    if(this.SessionService.UsPsCode == undefined){
      // this.router.navigateByUrl("login")
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
