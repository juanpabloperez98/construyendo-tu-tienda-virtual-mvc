import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HighlightService } from './services/highlight.service';
import { VariablesGlobalesService } from './services/variables-globales.service';
import { ReturnComponent } from './return/return.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ReturnComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [
    HighlightService,
    VariablesGlobalesService
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    ReturnComponent
  ]
})
export class SharedModule { }
