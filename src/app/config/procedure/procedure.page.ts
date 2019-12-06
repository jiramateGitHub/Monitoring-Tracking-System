import { ProcedureInputPage } from './../procedure-input/procedure-input.page';
import { MtsProcedureService } from './../../service/mts_procedure/mts-procedure.service';
import { AlertController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.page.html',
  styleUrls: ['./procedure.page.scss'],
})
export class ProcedurePage implements OnInit {
  private pcd_list:any[];
  constructor(private alertController: AlertController,
              private modalController: ModalController,
              private MtsProcedureService:MtsProcedureService) { }

  ngOnInit() {
    this.get_procedure()
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
    });
  }

}
