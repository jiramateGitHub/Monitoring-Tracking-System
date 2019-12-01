import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class MtsProcessGroupService {

  constructor(private http:Http) { }

  get_hr_person(){
    return this.http.get("http://127.0.0.1:3000/hr_person").map(res => res.json());
  }

  get_process_group(){
    return this.http.get("http://127.0.0.1:3000/process_group").map(res => res.json());
  }

  process_group_insert(pcsg_code:string,pcsg_th:string, pcsg_en:string){
    let data = {
      "pcsg_code": pcsg_code,
      "pcsg_th": pcsg_th,
      "pcsg_en": pcsg_en,
      "pcsg_active": "Y",
      "pcsg_editor":"60160157"
    }
    return this.http.post("http://127.0.0.1:3000/process_group",data).map(res => res.json());
  }

  process_group_active_update(pcsg_id:string){
    let data = {
      "pcsg_active": "N",
      "pcsg_editor":"60160157"
    }
    return this.http.put("http://127.0.0.1:3000/process_group_active_update/"+pcsg_id,data).map(res => res.json());
  }

}
