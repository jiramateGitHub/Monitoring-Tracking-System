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
    this.MtsProcedureService.pcd_pcs_id = "1";
    this.get_procedure()
  }

  get_procedure(){
    this.MtsProcedureService.get_procedure().subscribe(result => {
      this.pcd_list = result;
    });
  }

}
