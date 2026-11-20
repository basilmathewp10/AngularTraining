import { Injectable } from "@angular/core";
import { BlogData } from "../data/blog-data";
import { BlogDataFormat } from "../models/blog-data-format";
 
@Injectable({
    providedIn:'root',
})

export class BlogService {
    getBlogData(): BlogDataFormat[] {
        return BlogData;
    }
}