import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MtsProcedureStateService {

  constructor(private Httpp:Http) { }
}
