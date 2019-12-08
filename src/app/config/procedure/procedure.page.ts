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
  state:any[];
  automaticClose = false;

  constructor(private alertController: AlertController,
              private modalController: ModalController,
              private MtsProcedureService:MtsProcedureService,
              private http:HttpClient) { }

  ngOnInit() {
    this.get_procedure()
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
      console.log(result)
      this.state = result;
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
