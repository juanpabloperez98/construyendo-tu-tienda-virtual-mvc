import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/modules/shared/services/highlight.service';
import { VariablesGlobalesService } from 'src/modules/shared/services/variables-globales.service';


@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component implements OnInit{
  textBackModule:string = ''
  uriBack: string = '/introduccion_patron_diseno_mvc/main'


  constructor(
    private highlightService: HighlightService,
    private variablesglobalesservice: VariablesGlobalesService
  ){}



  ngOnInit(): void {
    this.textBackModule = this.variablesglobalesservice.textBackModule
  }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

}
