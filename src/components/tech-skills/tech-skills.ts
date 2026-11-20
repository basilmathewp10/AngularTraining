import { Component, inject } from "@angular/core";
import { HomeService } from "../../services/home_service";


@Component ({
    selector : 'skills-compo',
    templateUrl : './tech-skills.html',
    styleUrl : './tech-skills.css'
})

export class TechLists {
    techInject = inject(HomeService);
    details : string[] = this.techInject.getSkills();
}