import { Component } from '@angular/core';

import {
  NavbarComponent
} from './shared/components/navbar/navbar.component';

import {
  HomeComponent
} from './features/portfolio/home/home.component';

import {
  SkillsComponent
} from './features/portfolio/skills/skills.component';

import {
  ProjectsComponent
} from './features/portfolio/projects/projects.component';

import {
  ExperienceComponent
} from './features/portfolio/experience/experience.component';

import {
  EducationComponent
} from './features/portfolio/education/education.component';

import {
  ResumeComponent
} from './features/portfolio/resume/resume.component';

import {
  ContactComponent
} from './features/portfolio/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HomeComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    ResumeComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {}
