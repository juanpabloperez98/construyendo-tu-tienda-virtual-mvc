import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { Ejemplo1Component } from './pages/ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './pages/ejemplo2/ejemplo2.component';

export const module1PageRoutes: Routes = [
  {
    path:'main', component: MainComponent,
  },
  {
    path:'ejemplo-1', component: Ejemplo1Component,
  },
  {
    path:'ejemplo-2', component: Ejemplo2Component,
  }
];
