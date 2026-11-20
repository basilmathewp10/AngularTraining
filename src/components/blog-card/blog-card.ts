import { Component, input } from "@angular/core";
import { BlogDataFormat } from "../../models/blog-data-format";

@Component({
    selector : 'blog-card',
    templateUrl : 'blog-card.html',
    styleUrl : 'blog-card.css'
})

export class BlogCard {
    blogElement = input.required<BlogDataFormat>();
}