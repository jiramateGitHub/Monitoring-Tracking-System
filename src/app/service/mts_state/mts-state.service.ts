import { SessionService } from './../session/session.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MtsStateService {
  public st_id
  public st_code	
  public st_th
  public st_en
  public st_color	
  public st_active
  public st_last_update
  public st_editor
  
  constructor(private http:Http,private SessionService:SessionService) { }

  state_insert(){
    let data = {
      "st_code": this.st_code,
      "st_th": this.st_th,
      "st_en": this.st_en,
      "st_color": this.st_color,
      "st_active": "Y",
      "st_editor": this.SessionService.UsPsCode
    }
    console.log(data)
    return this.http.post("http://127.0.0.1:3000/state",data).map(res => res.json());
  }

  state_update(){
    let data = {
      "st_id": this.st_id,
      "st_code": this.st_code,
      "st_th": this.st_th,
      "st_en": this.st_en,
      "st_color": this.st_color,
      "st_active": "Y",
      "st_editor": this.SessionService.UsPsCode
    }
    console.log(data)
    return this.http.put("http://127.0.0.1:3000/state/"+this.st_id,data).map(res => res.json());
  }

  state_active_update(){
    let data = {
      "st_active": "N",
      "st_editor": this.SessionService.UsPsCode
    }
    return this.http.put("http://127.0.0.1:3000/state_active_update/"+this.st_id,data).map(res => res.json());
  }
}
