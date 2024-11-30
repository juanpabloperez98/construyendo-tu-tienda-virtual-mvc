import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent implements OnInit{

  // Input's variables
  @Input() next: boolean = false;
  @Input() back: boolean = false;
  @Input() textNext: string = '';
  @Input() textBack: string = '';
  @Input() uriBack: string = '';
  @Input() uriNext: string = '';

  // Outpout's variables

  // Global's variables
  public iconoVolver:string = '';
  public iconoSeguir:string = '';

  constructor(
  ){ }

  ngOnInit(): void {}

}
