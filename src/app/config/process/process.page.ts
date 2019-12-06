import { ProcessInputPage } from './../process-input/process-input.page';
import { MtsProcedureService } from './../../service/mts_procedure/mts-procedure.service';
import { Router } from '@angular/router';
import { MtsProcessService } from './../../service/mts_process/mts-process.service';
import { AlertController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.page.html',
  styleUrls: ['./process.page.scss'],
})
export class ProcessPage implements OnInit {
  private pcs_list:any[];
  constructor(private alertController: AlertController,
              private modalController: ModalController,
              private router:Router,
              private MtsProcessService:MtsProcessService,
              private MtsProcedureService:MtsProcedureService) { }

  ngOnInit() {
    this.get_procedure()
  }

  get_procedure(){
    this.MtsProcessService.get_process().subscribe(result => {
      this.pcs_list = result;
    });
  }

  async modal_insert_show() {
    this.MtsProcessService.pcs_id = '';
    const modal = await this.modalController.create({
      component: ProcessInputPage
    });
    return await modal.present();
  }

  procedure_page_show(pcs_id:string){
    this.MtsProcedureService.pcd_pcs_id = pcs_id;
    this.router.navigateByUrl("procedure")
  }

}
