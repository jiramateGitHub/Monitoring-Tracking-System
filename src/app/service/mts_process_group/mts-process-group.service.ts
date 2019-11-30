import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class MtsProcessGroupService {

  constructor(private http:Http) { }

  get_hr_person(){
    return this.http.get("https://10.80.39.17/TSP60/Thepd-nu/index.php/mts/api/get_hr_person").map(res => res.json());
  }

}
