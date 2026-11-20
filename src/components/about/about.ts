
import { Component, inject } from '@angular/core';
import { AboutService } from '../../services/about-service';

@Component({
    selector: 'about-compo',
    templateUrl: './about.html',
    styleUrl: './about.css'
})

export class About {

    aboutInject = inject(AboutService);

    aboutData = this.aboutInject.getAboutData();

}