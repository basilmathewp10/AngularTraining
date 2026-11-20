import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortHeader } from '../components/header/port-header';
import { UserCard } from '../components/user/user';
import { TechLists } from '../components/tech-skills/tech-skills';
import { Projects } from '../components/projects/projects';
import { QuickNav } from '../components/navigation/navigation';
import { About } from '../components/about/about';
import { ProjectsContainer } from '../components/projects-container/projects-container';
import { BlogsContainer } from '../components/blogs-container/blogs-container';

@Component({
  imports: [RouterOutlet, PortHeader, UserCard, TechLists, Projects, QuickNav, About, ProjectsContainer, BlogsContainer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-demo-project1');
}