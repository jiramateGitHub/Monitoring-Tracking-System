import { MtsProcessService } from './../../service/mts_process/mts-process.service';
import { MtsProcedureStateService } from './../../service/mts_procedure_state/mts-procedure-state.service';
import { MtsStateService } from './../../service/mts_state/mts-state.service';
import { ProcedureInputPage } from './../procedure-input/procedure-input.page';
import { MtsProcedureService } from './../../service/mts_procedure/mts-procedure.service';
import { AlertController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
              private http:HttpClient) { }

  ngOnInit() {
    this.get_procedure()
    this.info_pcs_code = this.MtsProcessService.pcs_code
    this.info_pcs_th = this.MtsProcessService.pcs_th
    this.info_pcs_en = this.MtsProcessService.pcs_en
    // this.state = [
    //   {
    //     "name" : "Specials",
    //     "children" : [
    //       {
    //         "name" : "Special Academy"
    //       }
    //     ] 
    //   }
    // ]

  }

  async modal_insert_show() {
    this.MtsProcedureService.pcd_id = '';
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



}
