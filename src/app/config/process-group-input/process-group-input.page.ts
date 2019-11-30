import { MtsProcessGroupService } from './../../service/mts_process_group/mts-process-group.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-process-group-input',
  templateUrl: './process-group-input.page.html',
  styleUrls: ['./process-group-input.page.scss'],
})
export class ProcessGroupInputPage implements OnInit {
  private pcsg:string;
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
      console.log(this.pcsm_list)
    });
   
  }
  async closeModal(){
    await this.modalController.dismiss();
  }

}
