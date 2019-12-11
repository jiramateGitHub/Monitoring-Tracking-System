import { CasePage } from './config/case/case.page';
import { CaseInputPage } from './config/case-input/case-input.page';
import { StateInputPage } from './config/state-input/state-input.page';
import { ProcedureInputPage } from './config/procedure-input/procedure-input.page';
import { ProcessInputPage } from './config/process-input/process-input.page';
import { ComponentsModule } from './components/components.module';
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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { IonicSelectableModule } from "ionic-selectable";

@NgModule({
  declarations: [
    AppComponent,
    ProcessGroupInputPage,
    ProcessInputPage,
    ProcedureInputPage,
    StateInputPage,
    CaseInputPage
  ],
  entryComponents: [
    ProcessGroupInputPage,
    ProcessInputPage,
    ProcedureInputPage,
    StateInputPage,
    CaseInputPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule, 
    FormsModule,
    HttpModule,
    HttpClientModule,
    IonicSelectableModule,
    ComponentsModule
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
