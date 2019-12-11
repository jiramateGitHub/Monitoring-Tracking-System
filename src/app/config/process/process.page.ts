import { MtsCaseService } from './../../service/mts_case/mts-case.service';
import { HrPersonService } from './../../service/hr_person/hr-person.service';
import { ProcessInputPage } from './../process-input/process-input.page';
import { MtsProcedureService } from './../../service/mts_procedure/mts-procedure.service';
import { Router } from '@angular/router';
import { MtsProcessService } from './../../service/mts_process/mts-process.service';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';
@Component({
  selector: 'app-process',
  templateUrl: './process.page.html',
  styleUrls: ['./process.page.scss'],
})
export class ProcessPage implements OnInit {
  private pcs_list:any[];

  private info_pcsg_code;
  private info_pcsg_th;
  private info_pcsg_en;

  private info_pcs_code;
  private info_pcs_th;
  private info_pcs_en;

  constructor(
    private alertController: AlertController,
    private modalController: ModalController,
    private router:Router,
    private events:Events,
    private toastController:ToastController,
    private MtsProcessService:MtsProcessService,
    private MtsProcedureService:MtsProcedureService,
    private MtsCaseService:MtsCaseService,
    private HrPersonService:HrPersonService
  ) { }

  ngOnInit() {
    this.pcs_list = null
    this.get_process()
    this.events.subscribe('functionCall:get_process', eventData => { 
      this.get_process();
    });
  }

  doRefresh(event) {
    this.get_process()
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

  get_process(){
    this.MtsProcessService.get_process().subscribe(result => {
      this.pcs_list = result;
      this.info_pcsg_code = result[0].pcsg_code;
      this.info_pcsg_th = result[0].pcsg_th;
      this.info_pcsg_en = result[0].pcsg_en;

      this.info_pcs_code = result[0].pcs_code;
      this.info_pcs_th = result[0].pcs_th;
      this.info_pcs_en = result[0].pcs_en;
    });
  }

  async modal_insert_show() {
    this.MtsProcessService.pcs_id = "";
    this.MtsProcessService.pcs_code = "";
    this.MtsProcessService.pcs_th = "";
    this.MtsProcessService.pcs_en = "";
    this.MtsProcessService.pcs_year_type = "";
    this.MtsProcessService.pcs_year = "";
    this.MtsProcessService.type_input = 'insert';
    const modal = await this.modalController.create({
      component: ProcessInputPage
    });
    return await modal.present();
  }

  async modal_update_show() {
    const modal = await this.modalController.create({
      component: ProcessInputPage
    });
    return await modal.present();
  }

  async page_show(pcs_id:string,pcs_th:string){

    this.MtsProcedureService.pcd_pcs_id = pcs_id;
    this.MtsCaseService.case_pcs_id = pcs_id;

    this.MtsProcessService.pcs_code = this.info_pcs_code
    this.MtsProcessService.pcs_th = this.info_pcs_th
    this.MtsProcessService.pcs_en = this.info_pcs_en
    
    const alert = await this.alertController.create({
      header: 'ข้อความแจ้งเตือน',
      message: pcs_th,
      buttons: [
        {
          text: 'จัดการขั้นตอน',
          cssClass: 'secondary',
          handler: () => {
            this.router.navigateByUrl("procedure")
          }
        },
        {
          text: 'จัดการเรื่อง',
          cssClass: 'secondary',
          handler: () => {
            this.router.navigateByUrl("case")
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

  async presentAlertRadio() {
    let txt = 'ชื่อภาษาไทย: ' + this.MtsProcessService.pcs_th+'<br>'
        txt += 'ชื่อภาษาอังกฤษ: ' + this.MtsProcessService.pcs_en+'<br>'
        if(this.MtsProcessService.pcs_year_type == "1"){
          txt += 'ปีปฏิทิน: '+ this.MtsProcessService.pcs_year
        }else if(this.MtsProcessService.pcs_year_type == "2"){
          txt += 'ปีงบประมาณ: ' + this.MtsProcessService.pcs_year
        }else if(this.MtsProcessService.pcs_year_type == "3"){
          txt += 'ปีการศึกษา: ' + this.MtsProcessService.pcs_year
        }
        txt += "<br>สถานะ: บังคับใช้งาน"
        txt += "<br>ผู้ดูแล: " + this.HrPersonService.ps_fname + ' ' + this.HrPersonService.ps_lname
    const alert = await this.alertController.create({
      header: 'รายละเอียด',
      subHeader: 'รหัสกระบวนการ: ' + this.MtsProcessService.pcs_code,
      message: txt,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlert(pcs_id:string,pcs_code:string,pcs_th:string,pcs_en:string,pcs_year_type:string,pcs_year:string,pcs_enforce:string,ps_fname:string,ps_lname:string) {
    const alert = await this.alertController.create({
      header: 'ข้อความแจ้งเตือน',
      message: pcs_th,
      buttons: [
        {
          text: 'ดูรายละเอียด',
          cssClass: 'secondary',
          handler: () => {
              this.MtsProcessService.pcs_id = pcs_id;
              this.MtsProcessService.pcs_code = pcs_code;
              this.MtsProcessService.pcs_th = pcs_th;
              this.MtsProcessService.pcs_en = pcs_en;
              this.MtsProcessService.pcs_year_type = pcs_year_type;
              this.MtsProcessService.pcs_year = pcs_year;
              this.MtsProcessService.pcs_enforce = pcs_enforce;
              this.HrPersonService.ps_fname = ps_fname;
              this.HrPersonService.ps_lname = ps_lname;

              this.presentAlertRadio()
          }
        },
        {
          text: 'แก้ไข',
          cssClass: 'secondary',
          handler: () => {
            this.MtsProcessService.pcs_id = pcs_id;
            this.MtsProcessService.pcs_code = pcs_code;
            this.MtsProcessService.pcs_th = pcs_th;
            this.MtsProcessService.pcs_en = pcs_en;
            this.MtsProcessService.pcs_year_type = pcs_year_type;
            this.MtsProcessService.pcs_year = pcs_year;
            this.MtsProcessService.pcs_enforce = pcs_enforce;
            // this.MtsProcessManagerService.pcsm_ps_id = pcsm_ps_id;
            this.MtsProcessService.type_input = "update";
            this.modal_update_show()
          }
        },
        {
          text: 'ลบ',
          cssClass: 'secondary',
          handler: () => {
            this.process_group_active_update_AlertConfirm(pcs_id)
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

  async process_group_active_update_AlertConfirm(pcs_id:string) {
    const alert = await this.alertController.create({
      header: 'ยืนยันการลบ',
      message: 'ลบกระบวนการนี้?',
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
            this.MtsProcessService.pcs_id = pcs_id
            this.MtsProcessService.process_active_update().subscribe(result => {
              this.get_process();
              this.presentToast("ลบกลุ่มกระบวนเรียบร้อย")
           });
          }
        }
      ]
    });

    await alert.present();
  }

}
