import { Router } from '@angular/router';
import { SessionService } from './../service/session/session.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public UsPsCode
  public fname
  public img
  constructor(private SessionService:SessionService,private router:Router) {}

  ngOnInit() {
    this.UsPsCode = this.SessionService.UsPsCode
    this.fname = this.SessionService.fname
    console.log(this.SessionService.fname)
    this.img = "https://reg.buu.ac.th/registrar/getstudentimage.asp?id=" + this.UsPsCode
  }

  log_out(){
    this.router.navigateByUrl('login');
    this.SessionService.UsPsCode = ""
    this.SessionService.fname = ""
  }

  page_process_group_show(){
    this.router.navigateByUrl('process-group');
  }

  page_task_show(){
    this.router.navigateByUrl('task');
  }

}
