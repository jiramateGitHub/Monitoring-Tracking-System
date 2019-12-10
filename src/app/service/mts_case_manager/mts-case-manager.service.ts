import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class MtsCaseManagerService {

  public type_input:string;
  public cmgr_id:string;
  public cmgr_pcs_id:string;
  public cmgr_ps_id:string;
  public cmgr_active:string;
  public cmgr_last_update:string;
  public cmgr_editor:string;

  constructor(private http:Http) { }

  case_manager_insert(cmgr_pcs_id:string,cmgr_ps_id:string){
    let data = {
      "cmgr_pcs_id": cmgr_pcs_id,
      "cmgr_ps_id": cmgr_ps_id,
      "cmgr_active": "Y",
      "cmgr_editor":"60160157"
    }
    return this.http.post("http://127.0.0.1:3000/case_manager",data).map(res => res.json());
  }
  
  case_manager_update(cmgr_pcs_id:string,cmgr_ps_id:string){
    let data = {
      "cmgr_pcs_id": cmgr_pcs_id,
      "cmgr_ps_id": cmgr_ps_id,
      "cmgr_active": "Y",
      "cmgr_editor":"60160157"
    }
    return this.http.put("http://127.0.0.1:3000/case_manager/"+cmgr_pcs_id,data).map(res => res.json());
  }
}
