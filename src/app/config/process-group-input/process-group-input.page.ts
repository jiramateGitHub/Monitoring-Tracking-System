import { MtsProcessGroupService } from './../../service/mts_process_group/mts-process-group.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-process-group-input',
  templateUrl: './process-group-input.page.html',
  styleUrls: ['./process-group-input.page.scss'],
})
export class ProcessGroupInputPage implements OnInit {
  private pcsm_id:string;
  private pcsg_id:string;
  private pcsg_code:string;
  private pcsg_th:string;
  private pcsg_en:string;
  private pcsm_list:any[];
  
  constructor(
    private modalController: ModalController,
    private MtsProcessGroupService : MtsProcessGroupService) { }

  ngOnInit() {
    this.get_process_manager();
  }
  

  get_process_manager(){
    this.MtsProcessGroupService.get_hr_person().subscribe(result => {
      this.pcsm_list = result;
    });
  }

  process_group_insert(){
    this.MtsProcessGroupService.process_group_insert(this.pcsg_code,this.pcsg_th,this.pcsg_en,this.pcsm_id.ps_id).subscribe(result => {
        alert("insert success") ;
        this.get_process_manager();
        this.closeModal();
    });
  }


  async closeModal(){
    await this.modalController.dismiss();
  }

}
