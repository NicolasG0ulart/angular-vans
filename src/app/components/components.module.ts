import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


//components
import {HeaderComponent} from "./header/header.component";
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component'

@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[
    HeaderComponent,
    ButtonComponent,
    CardComponent
  ]
})
export class ComponentsModule { }
