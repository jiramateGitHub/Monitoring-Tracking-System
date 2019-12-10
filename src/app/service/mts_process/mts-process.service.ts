import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class MtsProcessService {
  public pcs_id;
  public pcs_code;
  public pcs_pcsg_id;
  public pcs_year_type;
  public pcs_year;
  public pcs_seq;
  public pcs_th;
  public pcs_en;
  public pcs_enforce;
  public pcs_skip	;
  public pcs_free	;
  public pcs_active	;
  public pcs_last_update	;
  public pcs_editor	;
  public type_input	;
  
  constructor(private http:Http) { }

  get_hr_person(){
    return this.http.get("https://10.80.39.17/TSP60/Thepd-nu/index.php/mts/api/get_hr_person").map(res => res.json());
  }

  get_process(){
    return this.http.get("http://127.0.0.1:3000/process/"+this.pcs_pcsg_id).map(res => res.json());
  }

  process_active_update(){
    let data = {
      "pcs_active": "N",
      "pcs_editor":"60160157"
    }
    return this.http.put("http://127.0.0.1:3000/process_active_update/"+this.pcs_id,data).map(res => res.json());
  }

  process_insert(){
    let data = {
      "pcs_code": this.pcs_code,
      "pcs_th": this.pcs_th,
      "pcs_en": this.pcs_en,
      "pcs_pcsg_id": this.pcs_pcsg_id,
      "pcs_year_type": this.pcs_year_type,
      "pcs_year": this.pcs_year,
      "pcs_seq": "1",
      "pcs_enforce": "1",
      "pcs_skip": "1",
      "pcs_free": "1",
      "pcs_active": "Y",
      "pcs_editor":"60160157"
    }
    return this.http.post("http://127.0.0.1:3000/process",data).map(res => res.json());
  }

  process_update(){
    let data = {
      "pcs_id": this.pcs_id,
      "pcs_code": this.pcs_code,
      "pcs_th": this.pcs_th,
      "pcs_en": this.pcs_en,
      "pcs_pcsg_id": this.pcs_pcsg_id,
      "pcs_year_type": this.pcs_year_type,
      "pcs_year": this.pcs_year,
      "pcs_seq": "1",
      "pcs_enforce": "1",
      "pcs_skip": "1",
      "pcs_free": "1",
      "pcs_active": "Y",
      "pcs_editor":"60160157"
    }
    console.log(data)
    return this.http.put("http://127.0.0.1:3000/process/"+this.pcs_id,data).map(res => res.json());
  }

  
}
