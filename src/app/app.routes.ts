import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogPostComponent } from './blog-post/blog-post.component';

export const routes: Routes = [
    {
        path: 'inicio', component: HomeComponent
    },
    {
        path: 'nosotros', component: AboutComponent
    },
    {
        path: ':postId', component: BlogPostComponent   
    },
    {
        path: '', redirectTo: '/inicio', pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/inicio',
        pathMatch: 'full'
    }

];
