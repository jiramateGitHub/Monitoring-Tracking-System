import { MtsProcessService } from './../../service/mts_process/mts-process.service';
import { MtsProcedureStateService } from './../../service/mts_procedure_state/mts-procedure-state.service';
import { MtsStateService } from './../../service/mts_state/mts-state.service';
import { ProcedureInputPage } from './../procedure-input/procedure-input.page';
import { MtsProcedureService } from './../../service/mts_procedure/mts-procedure.service';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Events } from '@ionic/angular';
@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.page.html',
  styleUrls: ['./procedure.page.scss'],
})
export class ProcedurePage implements OnInit {

  private pcd_list:any[];
  private info_pcs_code:string;
  private info_pcs_th:string;
  private info_pcs_en:string;

  private state:any[];

  automaticClose = false;

  constructor(private alertController: AlertController,
              private modalController: ModalController,
              private MtsProcessService:MtsProcessService,
              private MtsProcedureService:MtsProcedureService,
              private MtsStateService:MtsStateService,
              private MtsProcedureStateService:MtsProcedureStateService,
              private http:HttpClient,
              private events:Events,
              private toastController:ToastController) { }

  ngOnInit() {
    this.get_procedure()
    this.info_pcs_code = this.MtsProcessService.pcs_code
    this.info_pcs_th = this.MtsProcessService.pcs_th
    this.info_pcs_en = this.MtsProcessService.pcs_en

    this.events.subscribe('functionCall:get_procedure', eventData => { 
      this.get_procedure();
    });
  }

  doRefresh(event) {
    this.get_procedure()
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  async modal_insert_show() {
    this.MtsProcedureService.pcd_id = '';
    this.MtsProcedureService.pcd_th = '';
    this.MtsProcedureService.pcd_en = '';
    this.MtsProcedureService.pcd_ratio = '';
    this.MtsProcedureService.pcd_abbr = '';
    this.MtsProcedureService.type_input = 'insert';
    const modal = await this.modalController.create({
      component: ProcedureInputPage
    });
    return await modal.present();
  }

  async modal_update_show() {
    const modal = await this.modalController.create({
      component: ProcedureInputPage
    });
    return await modal.present();
  }

  get_procedure(){
    this.MtsProcedureService.get_procedure().subscribe(result => {
      this.pcd_list = result;
      this.state = result;
      console.log(result)
      for (let i = 0; i < this.state.length; i++) {
        this.MtsProcedureStateService.pcds_pcd_id = this.state[i].pcd_id
        this.MtsProcedureStateService.get_procedure().subscribe(result => {
          this.state[i].children = result
        });
      }
      console.log(this.state)
    });
  }

  toggleSection(index){
    this.state[index].open = !this.state[index].open;

    if(this.automaticClose && this.state[index].open){
      this.state
      .filter((item, itemIndex) => itemIndex != index)
      .map(item => item.open = false)
    }
  }

  toggleItem(index, childIndex){
    this.state[index].children[childIndex].open = !this.state[index].children[childIndex].open;
  }

  async presentToast(txt:string) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 2000
    });
    toast.present();
  }

  async presentAlert(pcd_id:string,pcd_abbr:string,pcd_th:string,pcd_en:string,pcd_ratio:string) {
    const alert = await this.alertController.create({
      header: 'ข้อความแจ้งเตือน',
      message: '',
      buttons: [
        {
          text: 'แก้ไข',
          cssClass: 'secondary',
          handler: () => {
            this.MtsProcedureService.pcd_id = pcd_id
            this.MtsProcedureService.pcd_abbr = pcd_abbr
            this.MtsProcedureService.pcd_th = pcd_th
            this.MtsProcedureService.pcd_en = pcd_en
            this.MtsProcedureService.pcd_ratio = pcd_ratio
            this.MtsProcedureService.type_input = "update";
            this.modal_update_show()
          }
        },
        {
          text: 'ลบ',
          cssClass: 'secondary',
          handler: () => {
            this.procedure_active_update_AlertConfirm(pcd_id)
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

  async procedure_active_update_AlertConfirm(pcd_id:string) {
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
            this.MtsProcedureService.pcd_id = pcd_id
            this.MtsProcedureService.procedure_active_update().subscribe(result => {
              this.get_procedure();
              this.presentToast("ลบขั้นตอนรียบร้อย")
           });
          }
        }
      ]
    });

    await alert.present();
  }


}
