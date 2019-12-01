import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MtsProcessManagerService {

  constructor(private http:Http) { }

  process_manager_insert(pcsm_pcsg_id:string,pcsm_ps_id:string){
    let data = {
      "pcsm_pcsg_id": pcsm_pcsg_id,
      "pcsm_ps_id": pcsm_ps_id,
      "pcsm_active": "Y",
      "pcsm_editor":"60160157"
    }
    return this.http.post("http://127.0.0.1:3000/process_manager",data).map(res => res.json());
  }
}
