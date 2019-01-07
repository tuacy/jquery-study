import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {JquerySelectorModule} from './selector/jquery-selector.module';
import {JqueryFilterModule} from './filter/jquery-filter.module';

const appRoutes: Routes = [
    {
        path: 'selector',
        loadChildren: () => JquerySelectorModule
    }, {
        path: 'filter',
        loadChildren: () => JqueryFilterModule
    }, {
        path: '',
        redirectTo: '/selector',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        CommonModule
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule {
}
