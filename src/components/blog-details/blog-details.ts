import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogService } from '../../services/blog-service';
import { BlogDataFormat } from '../../models/blog-data-format';

@Component({
    selector: 'blog-details',
    imports: [RouterLink],
    templateUrl: './blog-details.html',
    styleUrl: './blog-details.css'
})
export class BlogDetails {

    private route = inject(ActivatedRoute);
    private blogService = inject(BlogService);

    blog: BlogDataFormat | undefined;

    constructor() {
            const id = Number(this.route.snapshot.paramMap.get('id'));
            const blogs = this.blogService.getBlogData();
            this.blog = blogs.find(blog => blog.articleId === id);
    }
}