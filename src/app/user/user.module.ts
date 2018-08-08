import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {TCommonModule} from '../common/common.module';

const Components = [
  LoginComponent
];

@NgModule({
  imports: [
    CommonModule,
    TCommonModule
  ],
  declarations: [...Components],
  exports: [...Components]
})
export class UserModule { }
