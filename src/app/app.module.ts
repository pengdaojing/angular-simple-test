import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {OtherModule} from './other/other.module';
import {PagesModule} from './pages/pages.module';
import {UserModule} from './user/user.module';
import {RouterModule} from '@angular/router';
import {TCommonModule} from './common/common.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OtherModule,
    PagesModule,
    UserModule,
    RouterModule,
    TCommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
