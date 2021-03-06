import { SessionService } from './../session/session.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MtsProcessManagerService {
  public type_input:string;
  public pcsm_pcsg_id:string;
  public pcsm_ps_id:string;
  constructor(private http:Http,private SessionService:SessionService) { }

  process_manager_insert(pcsm_pcsg_id:string,pcsm_ps_id:string){
    let data = {
      "pcsm_pcsg_id": pcsm_pcsg_id,
      "pcsm_ps_id": pcsm_ps_id,
      "pcsm_active": "Y",
      "pcsm_editor": this.SessionService.UsPsCode
    }
    return this.http.post("http://127.0.0.1:3000/process_manager",data).map(res => res.json());
  }
  
  process_manager_update(pcsm_pcsg_id:string,pcsm_ps_id:string){
    let data = {
      "pcsm_pcsg_id": pcsm_pcsg_id,
      "pcsm_ps_id": pcsm_ps_id,
      "pcsm_active": "Y",
      "pcsm_editor": this.SessionService.UsPsCode
    }
    return this.http.put("http://127.0.0.1:3000/process_manager/"+pcsm_pcsg_id,data).map(res => res.json());
  }
}
