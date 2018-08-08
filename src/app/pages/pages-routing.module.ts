import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageOneComponent} from './page-one/page-one.component';
import {PageTwoComponent} from './page-two/page-two.component';

const pagesRoutes: Routes = [
  {path: 'page-one', component: PageOneComponent},
  {path: 'page-two', component: PageTwoComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(pagesRoutes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
