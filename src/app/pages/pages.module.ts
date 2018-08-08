import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';

const Components = [
  PageOneComponent,
  PageTwoComponent
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...Components],
  exports: [...Components]
})
export class PagesModule { }
