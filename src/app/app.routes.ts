import { Routes } from '@angular/router';
import { BlogDetails } from '../components/blog-details/blog-details';
import { HomePage } from './home-page';

export const routes: Routes = [
    {
        path: 'blog/:id',
        component: BlogDetails
    },
    {
        path: '',
        component: HomePage,
        pathMatch: 'full'
    }
];