import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { Ejemplo1Component } from './pages/ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './pages/ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './pages/ejemplo3/ejemplo3.component';
import { Ejercicio1Component } from './pages/ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './pages/ejercicio2/ejercicio2.component';

export const module1PageRoutes: Routes = [
  {
    path:'main', component: MainComponent,
  },
  {
    path:'ejemplo-1', component: Ejemplo1Component,
  },
  {
    path:'ejemplo-2', component: Ejemplo2Component,
  },
  {
    path:'ejemplo-3', component: Ejemplo3Component,
  },
  {
    path:'ejercicio-1', component: Ejercicio1Component,
  },
  {
    path:'ejercicio-2', component: Ejercicio2Component,
  },
];
