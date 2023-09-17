import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FirstsectionComponent } from './firstsection/firstsection.component';

//components
import {ComponentsModule} from "../../components/components.module";
import { TitleboxComponent } from './firstsection/titlebox/titlebox.component'
@NgModule({
  declarations: [
    HomeComponent,
    FirstsectionComponent,
    TitleboxComponent
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
