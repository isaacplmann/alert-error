import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {LukanaAlertyComponent} from "./lukana-alerty.component";
import {AlertyService} from "./alerty.service";

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
    ],
    declarations: [
        LukanaAlertyComponent
    ],
    exports: [
        LukanaAlertyComponent
    ]
})
export class LukanaAlertyModule {
    public static forRoot(): ModuleWithProviders {

        return {
            ngModule: LukanaAlertyModule,
            providers: [
                AlertyService
            ]
        };
    }
}
