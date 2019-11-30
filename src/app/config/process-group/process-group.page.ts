import { MtsProcessGroupService } from './../../service/mts_process_group/mts-process-group.service';
import { ProcessGroupInputPage } from './../process-group-input/process-group-input.page';

import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';


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

  constructor(public alertController: AlertController,
              private modalController: ModalController,
              private MtsProcessGroupService:MtsProcessGroupService
              ) { }

  ngOnInit() {  
    this.get_process_group();
  }

  async modal_insert_show() {
    const modal = await this.modalController.create({
      component: ProcessGroupInputPage
    });
    return await modal.present();
  }

  get_process_group(){
    this.MtsProcessGroupService.get_process_group().subscribe(result => {
      this.pcsg_list = result;
    });
  }

  // async presentAlertCheckbox() {
  //   const alert = await this.alertController.create({
  //     header: 'เพิ่มกลุ่มกระบวนการ',
  //     inputs: [
  //       {
  //         name: 'name1',
  //         type: 'text',
  //         label: 'Radio 4',
  //         placeholder: 'รหัสกลุ่มกระบวนการ'
  //       },
  //       {
  //         name: 'name2',
  //         type: 'text',
  //         id: 'name2-id',
  //         placeholder: 'ชื่อกลุ่มกระบวนการภาษาไทย'
  //       },
  //       {
  //         name: 'name3',
  //         type: 'text',
  //         placeholder: 'ชื่อกลุ่มกระบวนการภาษาอังกฤษ'
  //       }
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: () => {
  //           console.log('Confirm Cancel');
  //         }
  //       }, {
  //         text: 'Ok',
  //         handler: () => {
  //           console.log('Confirm Ok');
  //         }
  //       }
  //     ] 
  //   });

  //   await alert.present();
  // }

}
