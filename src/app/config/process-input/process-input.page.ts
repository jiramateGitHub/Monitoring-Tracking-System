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
  private cmgr_id;
  private ps_list:any[];

  private pcs_id:string;
  private pcs_code:string;
  private pcs_pcsg_id:string;
  private pcs_year_type:string;
  private pcs_year:string;
  private pcs_seq:string;
  private pcs_th:string;
  private pcs_en:string;
  private pcs_enforce:string;
  private pcs_skip:string;
  private pcs_free:string;
  private pcs_active:string;
  private pcs_last_update:string;
  private pcs_editor:string;
  private type_input:string;

  constructor(
              private modalController: ModalController,
              private events:Events,
              private MtsProcessService:MtsProcessService,
              private MtsProcessGroupService:MtsProcessGroupService
              ) { }
  
    ngOnInit() {
      this.get_process_manager()
      this.pcs_id = this.MtsProcessService.pcs_id;
      this.pcs_code = this.MtsProcessService.pcs_code;
      this.pcs_th = this.MtsProcessService.pcs_th;
      this.pcs_en = this.MtsProcessService.pcs_en;
      this.type_input = this.MtsProcessService.type_input;
    }

    get_process_manager(){
      this.MtsProcessGroupService.get_hr_person().subscribe(result => {
        this.ps_list = result;
      });
    }
  
    async closeModal(){
      await this.modalController.dismiss();
      this.events.publish('functionCall:get_process');
    }

    process_insert(){
     
      
    }

    process_update(){

    }
    

}
