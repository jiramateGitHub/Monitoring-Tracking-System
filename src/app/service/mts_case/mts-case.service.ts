import { SessionService } from './../session/session.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MtsCaseService {
  public case_id;
  public case_pcs_id;
  public case_code;
  public case_seq;
  public case_th;
  public case_en;
  public case_percentage;
  public case_active;
  public case_last_update;
  public case_editor;
  public type_input;
  constructor(private http:Http,private SessionService:SessionService) { }

  get_hr_person(){
    return this.http.get("http://127.0.0.1:3000/hr_person").map(res => res.json());
  }

  get_case(){
    return this.http.get("http://127.0.0.1:3000/case/"+this.case_pcs_id).map(res => res.json());
  }

  case_insert(){
    let data = {
      "case_code": this.case_code,
      "case_th": this.case_th,
      "case_en": this.case_en,
      "case_active": "Y",
      "case_editor": this.SessionService.UsPsCode
    }
    return this.http.post("http://127.0.0.1:3000/process_group",data).map(res => res.json());
  }

  case_update(){
    let data = {
      "case_id": this.case_id,
      "case_code": this.case_code,
      "case_th": this.case_th,
      "case_en": this.case_en,
      "case_active": "Y",
      "case_editor": this.SessionService.UsPsCode
    }
    return this.http.put("http://127.0.0.1:3000/process_group/"+this.case_id,data).map(res => res.json());
  }

  case_active_update(){
    let data = {
      "pcsg_active": "N",
      "pcsg_editor": this.SessionService.UsPsCode
    }
    return this.http.put("http://127.0.0.1:3000/process_group_active_update/"+this.case_id,data).map(res => res.json());
  }
}
