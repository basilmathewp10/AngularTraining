import { Component, input } from "@angular/core";
import { BlogDataFormat } from "../../models/blog-data-format";
import { RouterLink } from "@angular/router";

@Component({
    selector : 'blog-card',
    imports: [RouterLink],
    templateUrl : 'blog-card.html',
    styleUrl : 'blog-card.css',
})

export class BlogCard {
    blogElement = input.required<BlogDataFormat>();
}