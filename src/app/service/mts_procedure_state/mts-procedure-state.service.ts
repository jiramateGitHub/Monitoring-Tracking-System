import { SessionService } from './../session/session.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MtsProcedureStateService {
  public pcds_id;
  public pcds_pcd_id;
  public pcds_st_id;
  public pcds_seq;
  public pcds_start;
  public pcds_end;
  public pcds_active;
  public pcds_last_update;
  public pcds_editor;
  constructor(private http:Http,private SessionService:SessionService) { }

  get_procedure(){
    return this.http.get("http://127.0.0.1:3000/procedure_state/"+this.pcds_pcd_id).map(res => res.json());
  }

  procedure_state_insert(){
    let data = {
      "pcds_pcd_id": this.pcds_pcd_id,
      "pcds_st_id": this.pcds_st_id,
      "pcds_seq": this.pcds_seq,
      "pcds_start": this.pcds_start,
      "pcds_end": this.pcds_end,
      "pcds_active": "Y",
      "pcds_editor": this.SessionService.UsPsCode
    }
    console.log(data)
    return this.http.post("http://127.0.0.1:3000/procedure_state",data).map(res => res.json());
  }

  procedure_state_update(){
    let data = {
      "pcds_id": this.pcds_id,
      "pcds_pcd_id": this.pcds_pcd_id,
      "pcds_st_id": this.pcds_st_id,
      "pcds_seq": this.pcds_seq,
      "pcds_start": this.pcds_start,
      "pcds_end": this.pcds_end,
      "pcds_active": "Y",
      "pcds_editor": this.SessionService.UsPsCode
    }
    console.log(data)
    return this.http.put("http://127.0.0.1:3000/procedure_state/"+this.pcds_id,data).map(res => res.json());
  }

  procedure_state_active_update(){
    let data = {
      "pcds_active": "N",
      "pcds_editor": this.SessionService.UsPsCode
    }
    return this.http.put("http://127.0.0.1:3000/procedure_state_active_update/"+this.pcds_id,data).map(res => res.json());
  }
}
