// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { AppRoutes } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
