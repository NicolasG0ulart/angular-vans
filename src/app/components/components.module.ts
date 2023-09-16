import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


//components
import {HeaderComponent} from "./header/header.component"

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class ComponentsModule { }
