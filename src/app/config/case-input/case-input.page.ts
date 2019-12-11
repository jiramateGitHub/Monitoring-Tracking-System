import { MtsProcedureService } from './../../service/mts_procedure/mts-procedure.service';
import { MtsCaseProcedureService } from './../../service/mts_case_procedure/mts-case-procedure.service';
import { MtsTaskManagerService } from './../../service/mts_task_manager/mts-task-manager.service';
import { MtsCaseService } from './../../service/mts_case/mts-case.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Events } from '@ionic/angular';
@Component({
  selector: 'app-case-input',
  templateUrl: './case-input.page.html',
  styleUrls: ['./case-input.page.scss'],
})
export class CaseInputPage implements OnInit {
  private ps_id;
  private ps_list:any[];
  private type_input:string;

  private case_id;
  private case_pcs_id;
  private case_code;
  private case_seq;
  private case_th;
  private case_en;
  private case_percentage;
  private case_active;
  private case_last_update;
  private case_editor;

  constructor(
    private modalController: ModalController,
    private toastController:ToastController,
    public events: Events,
    private MtsCaseService:MtsCaseService,
    private MtsTaskManagerService:MtsTaskManagerService,
    private MtsCaseProcedureService:MtsCaseProcedureService,
    private MtsProcedureService:MtsProcedureService
  ) { }

  ngOnInit() {
    this.get_task_manager()
    this.case_id = this.MtsCaseService.case_id;
    this.case_code = this.MtsCaseService.case_code;
    this.case_th = this.MtsCaseService.case_th;
    this.case_en = this.MtsCaseService.case_en;
    this.ps_id = this.MtsTaskManagerService.tmgr_ps_id;
    this.type_input = this.MtsCaseService.type_input;
  }

  get_task_manager(){
    this.MtsCaseService.get_hr_person().subscribe(result => {
      this.ps_list = result;
    });
  }

  case_insert(){
    this.ps_id.toString();
    let ps_id = this.ps_id.ps_id;

    this.MtsCaseService.case_code = this.case_code
    this.MtsCaseService.case_th = this.case_th
    this.MtsCaseService.case_en = this.case_en
 
    this.MtsCaseService.case_insert().subscribe(result => {
      this.MtsTaskManagerService.task_manager_insert(result.insertId,ps_id).subscribe(result => {
      });
      this.case_procedure_insert(result.insertId)
    });
    this.closeModal();
  }

  case_update(){
    this.ps_id.toString();
    let ps_id = this.ps_id.ps_id;

    this.MtsCaseService.case_code = this.case_code
    this.MtsCaseService.case_th = this.case_th
    this.MtsCaseService.case_en = this.case_en

    this.MtsCaseService.case_update().subscribe(result => {
      this.MtsTaskManagerService.task_manager_update(this.case_id,ps_id).subscribe(result => {
        this.presentToast("แก้ไขเรื่องเรียบร้อย")
      });
    });
    this.closeModal();
  }

  case_procedure_insert(insertId:string){
    this.MtsProcedureService.get_procedure().subscribe(result => {
      console.log(result)
      for(var value of result){
        this.MtsCaseProcedureService.cpcd_case_id = insertId
        this.MtsCaseProcedureService.cpcd_pcd_id = this.MtsCaseService.case_pcs_id
        this.MtsCaseProcedureService.cpcd_seq = value.pcd_seq
        this.MtsCaseProcedureService.cpcd_th = value.pcd_th
        this.MtsCaseProcedureService.cpcd_en = value.pcd_en 
        this.MtsCaseProcedureService.cpcd_abbr = value.pcd_abbr
        this.MtsCaseProcedureService.cpcd_ratio = value.pcd_ratio
        this.MtsCaseProcedureService.cpcd_free = value.pcd_free
        this.MtsCaseProcedureService.case_procedure_insert().subscribe(result => {
        });
      }
    });

    this.presentToast("เพิ่มเรื่องเรียบร้อย")
  }

  async closeModal(){
    await this.modalController.dismiss();
    this.events.publish('functionCall:get_case');
  }

  async presentToast(txt:string) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 2000
    });
    toast.present();
  }

}
