import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { MainPageComponent } from './pages/main-page/main-page.component';

// Routes
import { homePageRoutes } from './home-app-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homePageRoutes),
    SharedModule
  ]
})
export class HomeModule { }
