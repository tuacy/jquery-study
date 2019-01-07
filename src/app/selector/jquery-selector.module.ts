import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JquerySelectorRoutingModule} from './jquery-selector-routing.module';
import { JquerySelectorComponent } from './jquery-selector.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        JquerySelectorRoutingModule
    ],
    declarations: [JquerySelectorComponent]
})
export class JquerySelectorModule {
}
