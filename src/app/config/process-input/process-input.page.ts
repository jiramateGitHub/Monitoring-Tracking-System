import { MtsCaseManagerService } from './../../service/mts_case_manager/mts-case-manager.service';
import { MtsProcessGroupService } from './../../service/mts_process_group/mts-process-group.service';
import { Component, OnInit } from '@angular/core';
import { MtsProcessService } from './../../service/mts_process/mts-process.service';
import { ModalController, Events, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-process-input',
  templateUrl: './process-input.page.html',
  styleUrls: ['./process-input.page.scss'],
})
export class ProcessInputPage implements OnInit {
  private ps_id;
  private ps_list:any[];

  private pcs_id:string;
  private pcs_code:string;
  private pcs_pcsg_id:string;
  private pcs_year_type:string;
  private pcs_year:string;
  private pcs_seq:string;
  private pcs_th:string;
  private pcs_en:string;
  private pcs_enforce;
  private pcs_skip:string;
  private pcs_free:string;
  private pcs_active:string;
  private pcs_last_update:string;
  private pcs_editor:string;
  private type_input:string;

  constructor(
              private modalController: ModalController,
              private events:Events,
              private toastController:ToastController,
              private MtsProcessService:MtsProcessService,
              private MtsProcessGroupService:MtsProcessGroupService,
              private MtsCaseManagerService:MtsCaseManagerService
              ) { }
  
    ngOnInit() {
      this.get_process_manager()
      this.pcs_id = this.MtsProcessService.pcs_id;
      this.pcs_code = this.MtsProcessService.pcs_code;
      this.pcs_th = this.MtsProcessService.pcs_th;
      this.pcs_en = this.MtsProcessService.pcs_en;
      this.pcs_enforce = true;
      this.ps_id = this.MtsCaseManagerService.cmgr_ps_id;
      this.type_input = this.MtsProcessService.type_input;
    }

    get_process_manager(){
      this.MtsProcessGroupService.get_hr_person().subscribe(result => {
        this.ps_list = result;
        for (var i=0; i<result.length ; i++) {
          if(result[i].ps_id == this.ps_id){
            this.ps_id = result[i]
          }
        }
      });
    }
  
    async closeModal(){
      await this.modalController.dismiss();
      this.events.publish('functionCall:get_process');
    }

    process_insert(){
      this.ps_id.toString();
      let ps_id = this.ps_id.ps_id;

      this.MtsProcessService.pcs_code = this.pcs_code
      this.MtsProcessService.pcs_th = this.pcs_th
      this.MtsProcessService.pcs_en = this.pcs_en
      this.MtsProcessService.pcs_year_type = this.pcs_year_type
      this.MtsProcessService.pcs_year = this.pcs_year

      this.MtsProcessService.process_insert().subscribe(result => {
        this.MtsCaseManagerService.case_manager_insert(result.insertId,ps_id).subscribe(result => {
          this.presentToast("เพิ่มกระบวนการเรียบร้อย")
        });
      });
      this.closeModal();
    }

    process_update(){
      this.ps_id.toString();
      let ps_id = this.ps_id.ps_id;

      this.MtsProcessService.pcs_id = this.pcs_id
      this.MtsProcessService.pcs_code = this.pcs_code
      this.MtsProcessService.pcs_th = this.pcs_th
      this.MtsProcessService.pcs_en = this.pcs_en
      this.MtsProcessService.pcs_year_type = this.pcs_year_type
      this.MtsProcessService.pcs_year = this.pcs_year

      this.MtsProcessService.process_update().subscribe(result => {
        this.MtsCaseManagerService.case_manager_update(this.pcs_id,ps_id).subscribe(result => {
          this.presentToast("แก้ไขกระบวนการเรียบร้อย")
        });
      });
      this.closeModal();
    }

    async presentToast(txt:string) {
      const toast = await this.toastController.create({
        message: txt,
        duration: 2000
      });
      toast.present();
    }
    

}
