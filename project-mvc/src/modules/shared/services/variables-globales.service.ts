import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariablesGlobalesService {

  public iconoVolver:string = '/assets/iconos/atras.png';
  public iconoSeguir:string = '/assets/iconos/seguir.png';

  public textNext = 'Siguiente Módulo'
  public textBack = 'Anterior Módulo'
  public textBackModule = 'Volver al módulo'

  constructor() { }
}
