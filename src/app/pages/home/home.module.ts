import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FirstsectionComponent } from './firstsection/firstsection.component';


@NgModule({
  declarations: [
    HomeComponent,
    FirstsectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
