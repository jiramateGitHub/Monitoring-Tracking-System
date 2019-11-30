import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-process-group-input',
  templateUrl: './process-group-input.page.html',
  styleUrls: ['./process-group-input.page.scss'],
})
export class ProcessGroupInputPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  pcsg = 0;
  users = [
    {
      id:0,
      name:"test"
    }
  ];

  get_process_manager(){
    this.customerService.getAllCustomer().subscribe(result => {
      this.customerList = result;
    });
  }
  async closeModal(){
    await this.modalController.dismiss();
  }

}
