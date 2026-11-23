import { Routes } from '@angular/router';
import { BlogDetails } from '../components/blog-details/blog-details'; 

export const routes: Routes = [
    {
        path: 'blog/:id',
        component: BlogDetails
    }
];