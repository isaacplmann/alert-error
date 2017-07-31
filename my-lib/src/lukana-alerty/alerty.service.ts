import {Injectable} from '@angular/core';
import {Alert} from "./alert";
import {Subject} from "rxjs/Subject";

@Injectable()
export class AlertyService {
    private _alerts: Alert[] = [];

    alerty = new Subject<Array<Alert>>();

    private add(text: string, type: string, closeTime: number = 2000) {
        const alert: Alert = {
            type: type,
            msg: text,
            closable: true
        };
        this._alerts.push(alert);
        this.alerty.next(this._alerts);
        if (closeTime) {
            setTimeout(() => {
                this.close(alert);
            }, closeTime, alert);
        }
    }

    addError(text: string, closeTime: number = 2000) {
        this.add(text, 'danger', closeTime);
    }

    addSuccess(text: string, closeTime: number = 2000) {
        this.add(text, 'success', closeTime);
    }

    close(alert: Alert) {
        const index: number = this._alerts.indexOf(alert);
        this._alerts.splice(index, 1);
        this.alerty.next(this._alerts);
    }
}
