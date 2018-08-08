import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NotFoundComponent} from './not-found/not-found.component';

const Components = [
  NotFoundComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...Components
  ],
  exports: [
    ...Components
  ]
})
export class OtherModule { }
