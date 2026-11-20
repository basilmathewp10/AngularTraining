import { Component,inject } from "@angular/core";
import { ProjectDataFormat } from "../../models/project-data-format";
import { ProjectService } from "../../services/projects-service";
import { ProjectCard } from "../project-card/project-card";


@Component({
    selector : 'proj-container',
    imports : [ProjectCard],
    templateUrl : './projects-container.html',
    styleUrl : './projects-container.css'
})

export class ProjectsContainer {
    projectService = inject(ProjectService);
    projectsLists : ProjectDataFormat[] = this.projectService.getProjectData();
}