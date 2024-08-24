import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { RouterModule } from '@angular/router';
import { module4PageRoutes } from './module4-app-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(module4PageRoutes),
    SharedModule
  ]
})
export class Module4Module { }
