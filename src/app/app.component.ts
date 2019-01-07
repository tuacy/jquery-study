import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {


    constructor(private router: Router) {
    }

    /**
     * 使用选择器
     */
    onJquerySelector() {
        this.router.navigateByUrl('/selector');
    }

    onJqueryFilter() {
        this.router.navigateByUrl('/filter');
    }
}
