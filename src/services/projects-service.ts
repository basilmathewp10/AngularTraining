import { ProjectDataFormat } from "../models/project-data-format";
import { projectData } from "../data/project-data";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root',
})

export class ProjectService {
    getProjectData() : ProjectDataFormat[]  {
        return projectData;
    }
}