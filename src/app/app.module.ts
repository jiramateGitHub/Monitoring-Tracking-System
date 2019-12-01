import { MtsProcessService } from './service/mts_process/mts-process.service';
import { MtsProcessManagerService } from './service/mts_process_manager/mts-process-manager.service';
import { MtsProcessGroupService } from './service/mts_process_group/mts-process-group.service';
import { ProcessGroupInputPage } from './config/process-group-input/process-group-input.page';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";
import { IonicSelectableModule } from "ionic-selectable";

@NgModule({
  declarations: [
    AppComponent,
    ProcessGroupInputPage
  ],
  entryComponents: [
    ProcessGroupInputPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule, 
    FormsModule,
    HttpModule,
    IonicSelectableModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    MtsProcessGroupService,
    MtsProcessManagerService,
    MtsProcessService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
