import { MtsProcessManagerService } from './../../service/mts_process_manager/mts-process-manager.service';
import { MtsProcessGroupService } from './../../service/mts_process_group/mts-process-group.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-process-group-input',
  templateUrl: './process-group-input.page.html',
  styleUrls: ['./process-group-input.page.scss'],
})
export class ProcessGroupInputPage implements OnInit {
  private pcsm_id;
  private pcsg_id:string;
  private pcsg_code:string;
  private pcsg_th:string;
  private pcsg_en:string;
  private pcsm_list:any[];
  
  constructor(
    private modalController: ModalController,
    private MtsProcessGroupService : MtsProcessGroupService,
    private MtsProcessManagerService:MtsProcessManagerService,
    public events: Events) { }

  ngOnInit() {
    this.get_process_manager();
  }
  

  get_process_manager(){
    this.MtsProcessGroupService.get_hr_person().subscribe(result => {
      this.pcsm_list = result;
    });
  }

  process_group_insert(){
    this.pcsm_id.toString();
    let ps_id = this.pcsm_id.ps_id;
    this.MtsProcessGroupService.process_group_insert(this.pcsg_code,this.pcsg_th,this.pcsg_en).subscribe(result => {
      this.MtsProcessManagerService.process_manager_insert(result.insertId,ps_id).subscribe(result => {
      });
    });
    this.closeModal();
  }


  async closeModal(){
    await this.modalController.dismiss();
    this.events.publish('functionCall:get_process_group');
  }

}
