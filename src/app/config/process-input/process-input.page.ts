import { Component, OnInit } from '@angular/core';
import { MtsProcessService } from './../../service/mts_process/mts-process.service';
import { ModalController, Events } from '@ionic/angular';
@Component({
  selector: 'app-process-input',
  templateUrl: './process-input.page.html',
  styleUrls: ['./process-input.page.scss'],
})
export class ProcessInputPage implements OnInit {

  constructor(
              private modalController: ModalController,
              private events:Events,
              private MtsProcessService:MtsProcessService
              ) { }
  
    ngOnInit() {
    }
  
    async closeModal(){
      await this.modalController.dismiss();
      this.events.publish('functionCall:get_process_group');
    }
    

}
