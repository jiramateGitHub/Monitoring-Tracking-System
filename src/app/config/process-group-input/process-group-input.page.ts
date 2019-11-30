import { MtsProcessGroupService } from './../../service/mts_process_group/mts-process-group.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-process-group-input',
  templateUrl: './process-group-input.page.html',
  styleUrls: ['./process-group-input.page.scss'],
})
export class ProcessGroupInputPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private MtsProcessGroupService : MtsProcessGroupService) { }

  ngOnInit() {
  }
  pcsg = 0;
  pcsm_list;

  get_process_manager(){
    this.MtsProcessGroupService.get_hr_person().subscribe(result => {
      this.pcsm_list = result;
    });
  }
  async closeModal(){
    await this.modalController.dismiss();
  }

}
