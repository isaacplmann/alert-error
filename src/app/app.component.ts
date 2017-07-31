import {Component} from '@angular/core';
import {AlertyService} from "../../my-lib/src/lukana-alerty/alerty.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private alertyService: AlertyService) {

    }

    dodajSukces() {
        this.alertyService.addSuccess("Działa!" + this.makeid());
    }

    dodajError() {
        this.alertyService.addError("Działa!" + this.makeid());
    }

    makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
}
