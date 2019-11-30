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

  async closeModal(){
    await this.modalController.dismiss();
  }

}
