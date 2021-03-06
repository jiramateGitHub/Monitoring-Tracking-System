import { MtsProcessService } from './../../service/mts_process/mts-process.service';
import { Router } from '@angular/router';
import { MtsProcessManagerService } from './../../service/mts_process_manager/mts-process-manager.service';
import { MtsProcessGroupService } from './../../service/mts_process_group/mts-process-group.service';
import { ProcessGroupInputPage } from './../process-group-input/process-group-input.page';

import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-process-group',
  templateUrl: './process-group.page.html',
  styleUrls: ['./process-group.page.scss'],
})
export class ProcessGroupPage implements OnInit {
  private pcsg_list:any[];
  private pcsg_id:string;
  private pcsg_code:string;
  private pcsg_th:string;
  private pcsg_en:string;

  constructor(
    private alertController: AlertController,
    private modalController: ModalController,
    private toastController:ToastController,
    private MtsProcessGroupService:MtsProcessGroupService,
    private MtsProcessManagerService:MtsProcessManagerService,
    private MtsProcessService:MtsProcessService,
    public events: Events,
    private router:Router
  ) { }

  ngOnInit() {  
    this.pcsg_list = null;
    this.get_process_group();
    this.events.subscribe('functionCall:get_process_group', eventData => { 
      this.get_process_group();
    });
  }

  doRefresh(event) {
    this.get_process_group()
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

  get_process_group(){
    this.MtsProcessGroupService.get_process_group().subscribe(result => {
      this.pcsg_list = result;
    });
  }

  async modal_insert_show() {
    this.MtsProcessGroupService.pcsg_id = '';
    this.MtsProcessGroupService.pcsg_code = '';
    this.MtsProcessGroupService.pcsg_th = '';
    this.MtsProcessGroupService.pcsg_en = '';
    this.MtsProcessManagerService.pcsm_ps_id = '';
    this.MtsProcessGroupService.type_input = 'insert';
    const modal = await this.modalController.create({
      component: ProcessGroupInputPage
    });
    return await modal.present();
  }

  async modal_update_show() {
    const modal = await this.modalController.create({
      component: ProcessGroupInputPage
    });
    return await modal.present();
  }

  async presentAlert(pcsg_id:string,pcsg_code:string,pcsg_th:string,pcsg_en:string,pcsm_ps_id:string) {
    const alert = await this.alertController.create({
      header: 'ข้อความแจ้งเตือน',
      message: pcsg_th,
      buttons: [
        {
          text: 'แก้ไข',
          cssClass: 'secondary',
          handler: () => {
            this.MtsProcessGroupService.pcsg_id = pcsg_id;
            this.MtsProcessGroupService.pcsg_code = pcsg_code;
            this.MtsProcessGroupService.pcsg_th = pcsg_th;
            this.MtsProcessGroupService.pcsg_en = pcsg_en;
            this.MtsProcessManagerService.pcsm_ps_id = pcsm_ps_id;
            this.MtsProcessGroupService.type_input = "update";
            this.modal_update_show()
          }
        },
        {
          text: 'ลบ',
          cssClass: 'secondary',
          handler: () => {
            this.process_group_active_update_AlertConfirm(pcsg_id)
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

  async process_group_active_update_AlertConfirm(pcsg_id:string) {
    const alert = await this.alertController.create({
      header: 'ยืนยันการลบ',
      message: 'ลบกลุ่มกระบวนการนี้?',
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
            this.MtsProcessGroupService.process_group_active_update(pcsg_id).subscribe(result => {
              this.get_process_group();
              this.presentToast("ลบกลุ่มกระบวนเรียบร้อย")
           });
           
          }
        }
      ]
    });

    await alert.present();
  }

  process_page_show(pcsg_id:string){
    this.MtsProcessService.pcs_pcsg_id = pcsg_id;
    this.router.navigateByUrl("process")
  }

}
