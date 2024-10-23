import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { module1PageRoutes } from './module1-app-routing.module';
import { Ejemplo1Component } from './pages/ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './pages/ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './pages/ejemplo3/ejemplo3.component';
import { Ejercicio1Component } from './pages/ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './pages/ejercicio2/ejercicio2.component';



@NgModule({
  declarations: [
    MainComponent,
    Ejemplo1Component,
    Ejemplo2Component,
    Ejemplo3Component,
    Ejercicio1Component,
    Ejercicio2Component,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(module1PageRoutes),
    SharedModule
  ]
})
export class Module1Module { }
