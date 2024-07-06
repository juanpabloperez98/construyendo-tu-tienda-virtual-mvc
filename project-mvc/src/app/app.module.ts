// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { AppRoutes } from './app-routing.module';

// Services



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes,{
      scrollPositionRestoration: 'top',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
