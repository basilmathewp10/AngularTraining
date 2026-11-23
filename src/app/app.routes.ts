import { Routes } from '@angular/router';
import { About } from '../components/about/about';
import { BlogDetails } from '../components/blog-details/blog-details'; 

export const routes: Routes = [
    {
        path: 'about',
        component: About
    },
    {
        path: 'blog/:id',
        component: BlogDetails
    }
];