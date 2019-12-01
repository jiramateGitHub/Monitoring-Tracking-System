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
    return this.http.get("http://127.0.0.1:3000/get_process_group").map(res => res.json());
  }

  process_group_insert(pcsg_code:string,pcsg_th:string, pcsg_en:string,ps_id:string){
    let data = {
      "pcsg_code": pcsg_code,
      "pcsg_th": pcsg_th,
      "pcsg_en": pcsg_en,
      "ps_id":ps_id,
      "UsPsCode":"60160157"
    }
    return this.http.post("http://127.0.0.1:3000/process_group_insert",data).map(res => res.text());
  }
}
