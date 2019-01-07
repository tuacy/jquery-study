import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {JqueryFilterComponent} from './jquery-filter.component';

const routes: Routes = [
  {
    path: '',
    component: JqueryFilterComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class JqueryFilterRoutingModule { }
