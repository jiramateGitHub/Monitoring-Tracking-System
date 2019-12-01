import { MtsProcessGroupService } from './../../service/mts_process_group/mts-process-group.service';
import { ProcessGroupInputPage } from './../process-group-input/process-group-input.page';

import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
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

  constructor(public alertController: AlertController,
              private modalController: ModalController,
              private MtsProcessGroupService:MtsProcessGroupService,
              public events: Events) { }

  ngOnInit() {  
    this.pcsg_list = null;
    this.get_process_group();
    this.events.subscribe('functionCall:get_process_group', eventData => { 
      this.get_process_group();
    });
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

  doRefresh(event) {
    this.get_process_group()
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'แก้ไข',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'ลบ',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'ยกเลิก',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }

      ]
    });

    await alert.present();
  }
}
