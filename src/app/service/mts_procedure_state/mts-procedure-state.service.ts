import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MtsProcedureStateService {
  public pcds_id;
  public pcds_pcd_id;
  public pcds_st_id;
  public pcds_seq;
  public pcds_start;
  public pcds_end;
  public pcds_active;
  public pcds_last_update;
  public pcds_editor;
  constructor(private http:Http) { }

  get_procedure(){
    return this.http.get("http://127.0.0.1:3000/procedure_state/"+this.pcds_pcd_id).map(res => res.json());
  }
}
