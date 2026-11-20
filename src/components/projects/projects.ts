import { Component, inject } from "@angular/core";
import { HomeService } from "../../services/home_service";


@Component ({
    selector : 'proj-compo',
    templateUrl : './projects.html',
    styleUrl : './projects.css'
})

export class Projects {
    projInject = inject(HomeService);
    projects : string[] = this.projInject.getProjects();
}