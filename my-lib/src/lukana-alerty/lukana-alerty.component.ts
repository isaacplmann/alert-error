import {Component, OnDestroy, OnInit} from "@angular/core";
import {Alert} from "./alert";
import {AlertyService} from "./alerty.service";
import {Subscription} from "rxjs/Subscription";

// import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'lukana-alerty',
    template:
            `
        <div *ngFor="let alert of alerty; let i=index">
            <ngb-alert
                    [type]="alert.type"
                    [dismissible]="alert.closable"
                    (close)="closeAlert(alert)">
                <div [innerHTML]="alert.msg"></div>
            </ngb-alert>
        </div>`,
    styles: [
            `
            :host {
                position: fixed;
                top: 6em;
                right: 1em;
                width: 30%;
            }
        `
    ]
})
export class LukanaAlertyComponent implements OnInit, OnDestroy {
    alerty: Alert[];
    protected alertsSub: Subscription;

    constructor(private alertyService: AlertyService) {

    }

    ngOnInit(): void {
        this.alertyService.alerty.subscribe(
            v => {
                this.alerty = v;
            }
        );
    }

    closeAlert(alert: Alert) {
        this.alertyService.close(alert);
    }

    ngOnDestroy() {
        this.alertsSub.unsubscribe();
    }
}