import { Component,inject } from "@angular/core";
import { BlogDataFormat } from "../../models/blog-data-format";
import { BlogService } from "../../services/blog-service";
import { BlogCard } from "../blog-card/blog-card";
import { KENDO_GRID } from '@progress/kendo-angular-grid';
import { RouterLink } from '@angular/router';
import { DateFormatPipe } from '../../app/pipes/date-format-pipe';
@Component({
    selector : 'blog-container',
    imports : [BlogCard,DateFormatPipe,KENDO_GRID,RouterLink],
    templateUrl : './blogs-container.html',
    styleUrl : './blogs-container.css'
})

export class BlogsContainer {
    viewMode: 'card' | 'table' = 'card';

    blogService = inject(BlogService);

    blogLists: BlogDataFormat[] = this.blogService.getBlogData();

    filteredBlogs: BlogDataFormat[] = this.blogLists;
    showDateFilter = false;
    startDate = '';
    endDate = '';

    filterByDate(event: Event, type: 'start' | 'end') {

        const selectedDate = (event.target as HTMLInputElement).value;

        if (type === 'start') {
            this.startDate = selectedDate;
        } else {
            this.endDate = selectedDate;
        }

        this.applyDateFilter();
    }

    applyDateFilter() {

        this.filteredBlogs = this.blogLists.filter(blog => {

            const blogDate = blog.pubDate;

            const afterStartDate = !this.startDate || blogDate >= this.startDate;

            const beforeEndDate = !this.endDate || blogDate <= this.endDate;

            return afterStartDate && beforeEndDate;
        });
    }

    clearFilter() {
        this.startDate = '';
        this.endDate = '';
        this.filteredBlogs = this.blogLists;
    }
}