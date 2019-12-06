import { StatePage } from './../state/state.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProcedurePage } from './procedure.page';

const routes: Routes = [
  {
    path: '',
    component: ProcedurePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: ProcedurePage
      }
    ])
  ],
  declarations: [ProcedurePage,StatePage]
})
export class ProcedurePageModule {}
