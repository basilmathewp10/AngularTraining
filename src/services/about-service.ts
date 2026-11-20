
import { Injectable } from "@angular/core";
import { AboutMeFormat } from "../models/about-me-format";
import { aboutMeData } from "../data/about-me-data";

@Injectable({
    providedIn: 'root'
})

export class AboutService {

    getAboutData(): AboutMeFormat {
        return aboutMeData;
    }

}