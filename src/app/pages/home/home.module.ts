import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FirstsectionComponent } from './firstsection/firstsection.component';

//components
import {ComponentsModule} from "../../components/components.module"
@NgModule({
  declarations: [
    HomeComponent,
    FirstsectionComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
