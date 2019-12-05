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
  
  constructor(private http:Http) { }

  get_hr_person(){
    return this.http.get("https://10.80.39.17/TSP60/Thepd-nu/index.php/mts/api/get_hr_person").map(res => res.json());
  }
}
