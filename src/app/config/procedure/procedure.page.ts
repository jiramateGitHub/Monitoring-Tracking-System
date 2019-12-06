import { MtsProcedureService } from './../../service/mts_procedure/mts-procedure.service';
import { AlertController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.page.html',
  styleUrls: ['./procedure.page.scss'],
})
export class ProcedurePage implements OnInit {
  public items: any = [];
  private pcd_list:any[];
  constructor(private alertController: AlertController,
              private modalController: ModalController,
              private MtsProcedureService:MtsProcedureService) { }

  ngOnInit() {
    this.get_procedure()
    this.items = [
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false }
    ];
  }

  get_procedure(){
    this.MtsProcedureService.get_procedure().subscribe(result => {
      this.pcd_list = result;
    });
  }

  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.items.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

}
