import { SessionService } from './../session/session.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class MtsTaskManagerService {
  public tmgr_id;
  public tmgr_ps_id;
  public tmgr_cpcd_id;
  public tmgr_active;
  public tmgr_last_update;
  public tmgr_editor;
  constructor(private http:Http,private SessionService:SessionService) { }

  task_manager_insert(tmgr_case_id:string,tmgr_ps_id:string){
    let data = {
      "tmgr_case_id": tmgr_case_id,
      "tmgr_ps_id": tmgr_ps_id,
      "tmgr_active": "Y",
      "tmgr_editor": this.SessionService.UsPsCode
    }
    return this.http.post("http://127.0.0.1:3000/task_manager",data).map(res => res.json());
  }
  
  task_manager_update(tmgr_case_id:string,tmgr_ps_id:string){
    let data = {
      "tmgr_case_id": tmgr_case_id,
      "tmgr_ps_id": tmgr_ps_id,
      "tmgr_active": "Y",
      "tmgr_editor": this.SessionService.UsPsCode
    }
    return this.http.put("http://127.0.0.1:3000/task_manager/"+tmgr_case_id,data).map(res => res.json());
  }
}
