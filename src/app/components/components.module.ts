import { StatePage } from './../config/state/state.page';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    StatePage
  ],
  exports:[
    StatePage
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
