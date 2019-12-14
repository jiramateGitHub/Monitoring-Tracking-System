import { SessionService } from './../session/session.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MtsProcedureService {
  public type_input
  public pcd_id;
  public pcd_pcs_id
  public pcd_seq;
  public pcd_th;
  public pcd_en;
  public pcd_abbr;
  public pcd_ratio;
  public pcd_active;
  public pcd_last_update;
  public pcd_editor;
  constructor(private http:Http,private SessionService:SessionService) { }

  get_procedure(){
    return this.http.get("http://127.0.0.1:3000/procedure/"+this.pcd_pcs_id).map(res => res.json());
  }

  
  procedure_insert(){
    let data = {
      "pcd_pcs_id": this.pcd_pcs_id,
      "pcd_seq": this.pcd_seq,
      "pcd_th": this.pcd_th,
      "pcd_en": this.pcd_en,
      "pcd_abbr": this.pcd_abbr,
      "pcd_active": "Y",
      "pcd_editor": this.SessionService.UsPsCode
    }
    console.log(data)
    return this.http.post("http://127.0.0.1:3000/procedure",data).map(res => res.json());
  }

  procedure_update(){
    let data = {
      "pcd_id": this.pcd_id,
      "pcd_th": this.pcd_th,
      "pcd_en": this.pcd_en,
      "pcd_abbr": this.pcd_abbr,
      "pcd_active": "Y",
      "pcd_editor": this.SessionService.UsPsCode
    }
    console.log(data)
    return this.http.put("http://127.0.0.1:3000/procedure/"+this.pcd_id,data).map(res => res.json());
  }

  procedure_active_update(){
    let data = {
      "pcd_active": "N",
      "pcd_editor": this.SessionService.UsPsCode
    }
    return this.http.put("http://127.0.0.1:3000/procedure_active_update/"+this.pcd_id,data).map(res => res.json());
  }
}
