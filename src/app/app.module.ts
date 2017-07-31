import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import {LukanaAlertyModule} from "../../my-lib/src/lukana-alerty/lukana-alerty.module";

import {AppComponent} from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        LukanaAlertyModule.forRoot(),
        NgbModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
