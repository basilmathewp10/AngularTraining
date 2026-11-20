import { Component,inject } from "@angular/core";
import { BlogDataFormat } from "../../models/blog-data-format";
import { BlogService } from "../../services/blog-service";
import { BlogCard } from "../blog-card/blog-card";


@Component({
    selector : 'blog-container',
    imports : [BlogCard],
    templateUrl : './blogs-container.html',
    styleUrl : './blogs-container.css'
})

export class BlogsContainer {
    blogService = inject(BlogService);
    blogLists : BlogDataFormat[] = this.blogService.getBlogData();
}