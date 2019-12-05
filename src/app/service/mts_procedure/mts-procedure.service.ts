import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MtsProcedureService {
  public pcd_id;
  public pcd_pcs_id:string;
  public pcd_seq;
  public pcd_th;
  public pcd_en;
  public pcd_abbr;
  public pcd_ratio;
  public pcd_active;
  public pcd_last_update;
  public pcd_editor;
  constructor(private http:Http) { }

  get_procedure(){
    return this.http.get("http://127.0.0.1:3000/procedure/"+this.pcd_pcs_id).map(res => res.json());
  }
}
