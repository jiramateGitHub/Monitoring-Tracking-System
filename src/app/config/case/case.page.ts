import { MtsTaskManagerService } from './../../service/mts_task_manager/mts-task-manager.service';
import { MtsProcessService } from './../../service/mts_process/mts-process.service';
import { CaseInputPage } from './../case-input/case-input.page';
import { MtsCaseService } from './../../service/mts_case/mts-case.service';
import { Component, OnInit } from '@angular/core';
import { Events, ToastController, ModalController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-case',
  templateUrl: './case.page.html',
  styleUrls: ['./case.page.scss'],
})
export class CasePage implements OnInit {
  private case_list:any[];

  private info_pcs_code:string;
  private info_pcs_th:string;
  private info_pcs_en:string;
  constructor(
    public events: Events,
    private router:Router,
    private toastController:ToastController,
    private modalController:ModalController,
    private alertController: AlertController,
    private MtsCaseService:MtsCaseService,
    private MtsProcessService:MtsProcessService,
    private MtsTaskManagerService:MtsTaskManagerService
  ) { }

  ngOnInit() {
    this.case_list = null
    this.get_case()
    this.info_pcs_code = this.MtsProcessService.pcs_code
    this.info_pcs_th = this.MtsProcessService.pcs_th
    this.info_pcs_en = this.MtsProcessService.pcs_en
    this.events.subscribe('functionCall:get_case', eventData => { 
      this.get_case();
    });
  }

  doRefresh(event) {
    this.get_case()
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  async presentToast(txt:string) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 2000
    });
    toast.present();
  }

  get_case(){
    this.MtsCaseService.get_case().subscribe(result => {
      this.case_list = result;
    });
  }

  async modal_insert_show() {
    this.MtsCaseService.case_id = ""
    this.MtsCaseService.case_code = "";
    this.MtsCaseService.case_th = "";
    this.MtsCaseService.case_en = "";
    this.MtsTaskManagerService.tmgr_ps_id = "";
    this.MtsCaseService.type_input = 'insert';
    const modal = await this.modalController.create({
      component: CaseInputPage
    });
    return await modal.present();
  }

  async modal_update_show() {
    const modal = await this.modalController.create({
      component: CaseInputPage
    });
    return await modal.present();
  }

  async presentAlert(case_id:string,case_code:string,case_th:string,case_en:string,tmgr_ps_id:string) {
    const alert = await this.alertController.create({
      header: 'ข้อความแจ้งเตือน',
      message: '',
      buttons: [
        {
          text: 'แก้ไข',
          cssClass: 'secondary',
          handler: () => {
            this.MtsCaseService.case_id = case_id;
            this.MtsCaseService.case_code = case_code;
            this.MtsCaseService.case_th = case_th;
            this.MtsCaseService.case_en = case_en;
            this.MtsTaskManagerService.tmgr_ps_id = tmgr_ps_id;
            this.MtsCaseService.type_input = "update";
            this.modal_update_show()
          }
        },
        {
          text: 'ลบ',
          cssClass: 'secondary',
          handler: () => {
            this.case_active_update_AlertConfirm(case_id)
          }
        },
        {
          text: 'ยกเลิก',
          cssClass: 'secondary',
          handler: () => {
          }
        }
      ]
    });

    await alert.present();
  }

  async case_active_update_AlertConfirm(case_id:string) {
    const alert = await this.alertController.create({
      header: 'ยืนยันการลบ',
      message: 'ลบเรื่องนี้?',
      buttons: [
        {
          text: 'ไม่ลบ',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'ลบ',
          handler: () => {
            this.MtsCaseService.case_id = case_id
            this.MtsCaseService.case_active_update().subscribe(result => {
              this.get_case();
              this.presentToast("ลบกลุ่มเรื่องเรียบร้อย")
           });
          }
        }
      ]
    });

    await alert.present();
  }


}
