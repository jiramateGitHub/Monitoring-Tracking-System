import { SessionService } from './../service/session/session.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public UsPsCode
  constructor(private SessionService:SessionService) {}

  ngOnInit() {
    this.UsPsCode = this.SessionService.UsPsCode
  }

}
