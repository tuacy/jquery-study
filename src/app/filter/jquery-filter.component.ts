import {AfterViewInit, Component} from '@angular/core';

@Component({
    selector: 'app-jquery-filter',
    templateUrl: './jquery-filter.component.html',
    styleUrls: ['./jquery-filter.component.less']
})
export class JqueryFilterComponent implements AfterViewInit {

    ngAfterViewInit(): void {
        /**
         * 类过滤，hasClass
         */
        $('div').click(function () {
            if ($(this).hasClass('red')) {
                $(this).animate({left: 120});
                $(this).animate({left: 240});
                $(this).animate({left: 0});
                $(this).animate({left: 240});
                $(this).animate({left: 120});
            }
        });
    }


}
