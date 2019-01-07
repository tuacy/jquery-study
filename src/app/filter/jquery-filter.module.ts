import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JqueryFilterComponent} from './jquery-filter.component';
import {JqueryFilterRoutingModule} from './jquery-filter-routing.module';

@NgModule({
    imports: [
        CommonModule,
        JqueryFilterRoutingModule
    ],
    declarations: [
        JqueryFilterComponent
    ]
})
export class JqueryFilterModule {
}
