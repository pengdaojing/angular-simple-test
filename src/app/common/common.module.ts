import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {CommonService} from './services/common.service';

const Components = [
  HeaderComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...Components],
  exports: [...Components],
  providers: [CommonService]
})
export class TCommonModule { }
