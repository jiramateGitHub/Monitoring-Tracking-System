import { ToastController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'],
})
export class StateComponent implements OnInit {

  @Input('state') state: any;

  constructor(private ToastController:ToastController) { }

  ngOnInit() {}
  

}
