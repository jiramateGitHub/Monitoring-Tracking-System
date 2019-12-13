import { MtsProcedureStateService } from './../../service/mts_procedure_state/mts-procedure-state.service';
import { MtsStateService } from './../../service/mts_state/mts-state.service';
import { MtsProcedureService } from './../../service/mts_procedure/mts-procedure.service';
import { ModalController, Events } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procedure-input',
  templateUrl: './procedure-input.page.html',
  styleUrls: ['./procedure-input.page.scss'],
})
export class ProcedureInputPage implements OnInit {
  private type_input:string;

  private pcd_id;
  private pcd_pcs_id;
  private pcd_seq;
  private pcd_th;
  private pcd_en;
  private pcd_abbr;
  private pcd_ratio;
  private pcd_active;
  private pcd_last_update;
  private pcd_editor;
  constructor(private modalController:ModalController,
              private events:Events,
              private MtsProcedureService:MtsProcedureService,
              private MtsStateService:MtsStateService,
              private MtsProcedureStateService:MtsProcedureStateService) { }

  ngOnInit() {
  }


  async closeModal(){
    await this.modalController.dismiss();
    this.events.publish('functionCall:get_procedure');
  }
  
  procedure_insert(){

    this.MtsProcedureService.pcd_abbr = this.pcd_abbr
    this.MtsProcedureService.pcd_th = this.pcd_th
    this.MtsProcedureService.pcd_en = this.pcd_en
 
    this.MtsProcedureService.procedure_insert().subscribe(result => {
      
    });
    this.closeModal();
  }

  procedure_update(){

    this.MtsProcedureService.pcd_id = this.pcd_id
    this.MtsProcedureService.pcd_abbr = this.pcd_abbr
    this.MtsProcedureService.pcd_th = this.pcd_th
    this.MtsProcedureService.pcd_en = this.pcd_en
    
    this.MtsProcedureService.procedure_update().subscribe(result => {
    
    });
    this.closeModal();
  }
}
