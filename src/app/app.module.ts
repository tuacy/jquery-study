import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {JquerySelectorModule} from './selector/jquery-selector.module';
import {AppRoutingModule} from './app-routing.module';
import { JqueryFilterComponent } from './filter/jquery-filter.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {JqueryFilterModule} from './filter/jquery-filter.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        RouterModule,
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        JquerySelectorModule,
        JqueryFilterModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
