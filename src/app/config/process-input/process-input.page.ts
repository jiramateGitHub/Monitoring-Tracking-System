import { MtsProcessGroupService } from './../../service/mts_process_group/mts-process-group.service';
import { Component, OnInit } from '@angular/core';
import { MtsProcessService } from './../../service/mts_process/mts-process.service';
import { ModalController, Events } from '@ionic/angular';
@Component({
  selector: 'app-process-input',
  templateUrl: './process-input.page.html',
  styleUrls: ['./process-input.page.scss'],
})
export class ProcessInputPage implements OnInit {
  private pcsm_id;
  private pcsm_list:any[];
  constructor(
              private modalController: ModalController,
              private events:Events,
              private MtsProcessService:MtsProcessService,
              private MtsProcessGroupService:MtsProcessGroupService
              ) { }
  
    ngOnInit() {
      this.get_process_manager()
    }

    get_process_manager(){
      this.MtsProcessGroupService.get_hr_person().subscribe(result => {
        this.pcsm_list = result;
      });
    }
  
    async closeModal(){
      await this.modalController.dismiss();
      this.events.publish('functionCall:get_process_group');
    }
    

}
