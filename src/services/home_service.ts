import { Injectable } from "@angular/core";
import { personalDataFormat } from "../models/home_interface";
import { personalData } from "../data/home_data"

@Injectable ({
    providedIn : 'root'
})

export class HomeService {
    getHomeData() {
        const homeData : personalDataFormat = personalData;
        return homeData;
    }
    getSkills(): string[]{
        const homeData : personalDataFormat = personalData;
        return homeData.techSkills;
    }
    getProjects(): string[]{
        const homeData : personalDataFormat = personalData;
        return homeData.projects;
    }
}