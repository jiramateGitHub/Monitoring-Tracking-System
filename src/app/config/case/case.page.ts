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
  constructor(
    public events: Events,
    private router:Router,
    private toastController:ToastController,
    private modalController:ModalController,
    private alertController: AlertController,
    private MtsCaseService:MtsCaseService
  ) { }

  ngOnInit() {
    this.case_list = null
    this.get_case()
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
    this.MtsCaseService.case_pcs_id = "1"
    this.MtsCaseService.get_case().subscribe(result => {
      this.case_list = result;
    });
  }

  async modal_insert_show() {
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

  async presentAlert(case_id:string,case_code:string,case_th:string,case_en:string) {
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
            this.MtsCaseService.type_input = "update";
            this.modal_update_show()
          }
        },
        {
          text: 'ลบ',
          cssClass: 'secondary',
          handler: () => {
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


}
