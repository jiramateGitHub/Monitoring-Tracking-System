import { MtsProcedureStateService } from './../../service/mts_procedure_state/mts-procedure-state.service';
import { MtsStateService } from './../../service/mts_state/mts-state.service';
import { MtsProcedureService } from './../../service/mts_procedure/mts-procedure.service';
import { ModalController, Events, ToastController } from '@ionic/angular';
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
              private toastController:ToastController,
              private MtsProcedureService:MtsProcedureService,
              private MtsStateService:MtsStateService,
              private MtsProcedureStateService:MtsProcedureStateService) { }

  ngOnInit() {
    this.type_input = this.MtsProcedureService.type_input;
  }


  async closeModal(){
    await this.modalController.dismiss();
    this.events.publish('functionCall:get_procedure');
  }

  async presentToast(txt:string) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 2000
    });
    toast.present();
  }

  
  procedure_insert(){

    this.MtsProcedureService.pcd_abbr = this.pcd_abbr
    this.MtsProcedureService.pcd_th = this.pcd_th
    this.MtsProcedureService.pcd_en = this.pcd_en
 
    this.MtsProcedureService.procedure_insert().subscribe(result => {
      
      this.MtsProcedureService.pcd_id = result.insertId

      this.MtsStateService.st_code = "1"
      this.MtsStateService.st_th = "รอดำเนินการ"
      this.MtsStateService.st_en = "Todo"
      this.MtsStateService.st_color = "#ff0000"
      this.MtsStateService.state_insert().subscribe(result_state => {
        this.MtsProcedureStateService.pcds_pcd_id = this.MtsProcedureService.pcd_id
        this.MtsProcedureStateService.pcds_st_id = result_state.insertId
        this.MtsProcedureStateService.pcds_seq = "1"
        this.MtsProcedureStateService.pcds_start = "Y"
        this.MtsProcedureStateService.pcds_end = "N"
        this.MtsProcedureStateService.procedure_state_insert().subscribe(result => {});
      });
      this.MtsStateService.st_code = "2"
      this.MtsStateService.st_th = "กำลังดำเนินการ"
      this.MtsStateService.st_en = "Doing"
      this.MtsStateService.st_color = "#ffa500"
      this.MtsStateService.st_active = "Y"
      this.MtsStateService.state_insert().subscribe(result_state => {
        this.MtsProcedureStateService.pcds_pcd_id = this.MtsProcedureService.pcd_id
        this.MtsProcedureStateService.pcds_st_id = result_state.insertId
        this.MtsProcedureStateService.pcds_seq = "2"
        this.MtsProcedureStateService.pcds_start = "N"
        this.MtsProcedureStateService.pcds_end = "N"
        this.MtsProcedureStateService.procedure_state_insert().subscribe(result => {});
      });
      this.MtsStateService.st_code = "3"
      this.MtsStateService.st_th = "เสร็จสิ้น"
      this.MtsStateService.st_en = "Done"
      this.MtsStateService.st_color = "#00ff00"
      this.MtsStateService.state_insert().subscribe(result_state => {
        this.MtsProcedureStateService.pcds_pcd_id = this.MtsProcedureService.pcd_id
        this.MtsProcedureStateService.pcds_st_id = result_state.insertId
        this.MtsProcedureStateService.pcds_seq = "3"
        this.MtsProcedureStateService.pcds_start = "N"
        this.MtsProcedureStateService.pcds_end = "Y"
        this.MtsProcedureStateService.procedure_state_insert().subscribe(result => {});
      });
    });
    this.closeModal();
    this.presentToast("เพิ่มขั้นตอนเรียบร้อย")
  }

  procedure_update(){
    this.MtsProcedureService.pcd_id = this.pcd_id
    this.MtsProcedureService.pcd_abbr = this.pcd_abbr
    this.MtsProcedureService.pcd_th = this.pcd_th
    this.MtsProcedureService.pcd_en = this.pcd_en
    this.MtsProcedureService.procedure_update().subscribe(result => {
      this.presentToast("แก้ไขขั้นตอนเรียบร้อย")
    });
    this.closeModal();
  }
}
