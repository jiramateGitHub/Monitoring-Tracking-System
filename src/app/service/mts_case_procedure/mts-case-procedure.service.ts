import { SessionService } from './../session/session.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MtsCaseProcedureService {
  public cpcd_id
  public cpcd_case_id
  public cpcd_pcd_id
  public cpcd_seq
  public cpcd_th
  public cpcd_en
  public cpcd_abbr
  public cpcd_ratio
  public cpcd_skip
  public cpcd_free
  public cpcd_active
  public cpcd_last_update
  public cpcd_editor
  public type_input;
  constructor(private http:Http,private SessionService:SessionService) { }

  case_procedure_insert(){
    let data = {
      "cpcd_case_id": this.cpcd_case_id,
      "cpcd_pcd_id": this.cpcd_pcd_id,
      "cpcd_seq": this.cpcd_seq,
      "cpcd_th": this.cpcd_th,
      "cpcd_en": this.cpcd_en,
      "cpcd_abbr": this.cpcd_abbr,
      "cpcd_ratio": this.cpcd_ratio,
      "cpcd_skip": '0',
      "cpcd_active": "Y",
      "cpcd_editor": this.SessionService.UsPsCode
    }
    console.log(data)
    return this.http.post("http://127.0.0.1:3000/case_procedure",data).map(res => res.json());
  }

 
}
