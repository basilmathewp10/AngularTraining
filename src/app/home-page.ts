import { Component } from '@angular/core';
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

@Component({
    selector: 'home-page',
    imports: [PortHeader, UserCard, TechLists, Projects, QuickNav, About, ProjectsContainer, BlogsContainer, ContactContainer, Footer],
    templateUrl: './home-page.html',
    styleUrl: './app.css'
})
export class HomePage {}
