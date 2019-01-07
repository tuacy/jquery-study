import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {JquerySelectorComponent} from './jquery-selector.component';

const routes: Routes = [
    {
        path: '',
        component: JquerySelectorComponent
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
export class JquerySelectorRoutingModule {
}
