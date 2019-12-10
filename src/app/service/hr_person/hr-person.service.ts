import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HrPersonService {
  public ps_id;
  public ps_fname;
  public ps_lname;

  constructor() { }
}
