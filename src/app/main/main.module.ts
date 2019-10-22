import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/module/shared.module'
import { MainSandbox } from './main.sandbox';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  providers: [
    MainSandbox
  ]
})
export class MainModule { }
