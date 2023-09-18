import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FirstsectionComponent } from './firstsection/firstsection.component';

//components
import {ComponentsModule} from "../../components/components.module";
import { TitleboxComponent } from './firstsection/titlebox/titlebox.component';
import { MainComponent } from './main/main.component';
import { FeatureComponent } from './main/feature/feature.component'
@NgModule({
  declarations: [
    HomeComponent,
    FirstsectionComponent,
    TitleboxComponent,
    MainComponent,
    FeatureComponent
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
