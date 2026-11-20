import { Component, input } from "@angular/core";
import { ProjectDataFormat } from "../../models/project-data-format";

@Component({
    selector : 'proj-card',
    templateUrl : 'project-card.html',
    styleUrl : 'project-card.css'
})

export class ProjectCard {
    projElement = input.required<ProjectDataFormat>();
}