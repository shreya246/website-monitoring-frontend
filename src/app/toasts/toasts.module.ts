import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastsComponent } from './toasts.component';



@NgModule({
  declarations: [ToastsComponent],
  exports:[
    ToastsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ToastsModule { }
