import { Component, input } from "@angular/core";
import { BlogDataFormat } from "../../models/blog-data-format";
import { RouterLink } from "@angular/router";
import { DateFormatPipe } from '../../app/pipes/date-format-pipe';
@Component({
    selector : 'blog-card',
    imports: [RouterLink, DateFormatPipe],
    templateUrl : 'blog-card.html',
    styleUrl : 'blog-card.css',
})

export class BlogCard {
    blogElement = input.required<BlogDataFormat>();
}