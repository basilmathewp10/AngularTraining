import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { PortHeader } from '../components/header/port-header';
import { UserCard } from '../components/user/user';
import { TechLists } from '../components/tech-skills/tech-skills';
import { Projects } from '../components/projects/projects';
import { QuickNav } from '../components/navigation/navigation';
import { About } from '../components/about/about';
import { ProjectsContainer } from '../components/projects-container/projects-container';
import { BlogsContainer } from '../components/blogs-container/blogs-container';
import { ContactContainer } from '../components/contact/contact';
import { Footer } from '../components/footer/footer';
import { filter } from 'rxjs';

@Component({
    imports: [RouterOutlet, PortHeader, UserCard, TechLists, Projects, QuickNav, About, ProjectsContainer, BlogsContainer, ContactContainer, Footer],
    selector: 'app-root',
    styleUrl: './app.css',
    templateUrl: './app.html',
})
export class App {

    protected readonly title = signal('angular-demo-project1');

    private router = inject(Router);

    isBlogDetails = signal(false);

    constructor() {

        this.isBlogDetails.set(this.router.url.startsWith('/blog/'));

        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(() => {
                this.isBlogDetails.set(
                    this.router.url.startsWith('/blog/')
                );
            });
    }
}