import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'footer-comp',
    imports: [RouterLink],
    templateUrl: './footer.html',
    styleUrl: './footer.css'
})
export class Footer {

    currentYear = new Date().getFullYear();

}