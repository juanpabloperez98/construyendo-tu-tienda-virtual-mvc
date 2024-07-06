import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariablesGlobalesService {

  public iconoVolver:string = '/assets/iconos/atras.png';
  public iconoSeguir:string = '/assets/iconos/seguir.png';

  constructor() { }
}
