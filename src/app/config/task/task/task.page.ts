import { MtsCaseService } from './../../../service/mts_case/mts-case.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  private task_list:any[];
  constructor(
    private MtsCaseService:MtsCaseService
  ) { }

  ngOnInit() {
    this.get_case_task()
  }

  doRefresh(event) {
    this.get_case_task()
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  get_case_task(){
    this.MtsCaseService.get_case_task().subscribe(result => {
      this.task_list = result;
    });
  }

}
