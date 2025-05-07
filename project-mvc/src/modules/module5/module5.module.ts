import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { module5PageRoutes } from './module5-app-routing.module';




@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(module5PageRoutes),
    SharedModule
  ]
})
export class Module5Module { }
