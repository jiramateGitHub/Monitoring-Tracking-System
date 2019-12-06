import { ModalController, Events } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procedure-input',
  templateUrl: './procedure-input.page.html',
  styleUrls: ['./procedure-input.page.scss'],
})
export class ProcedureInputPage implements OnInit {

  constructor(private modalController:ModalController,
              private events:Events) { }

  ngOnInit() {
  }


  async closeModal(){
    await this.modalController.dismiss();
    this.events.publish('functionCall:get_process_group');
  }
  

}
