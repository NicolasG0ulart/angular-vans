import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


//components
import {HeaderComponent} from "./header/header.component";
import { ButtonComponent } from './button/button.component'

@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[
    HeaderComponent,
    ButtonComponent
  ]
})
export class ComponentsModule { }
