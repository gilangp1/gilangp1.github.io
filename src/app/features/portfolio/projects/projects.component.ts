import { Component } from '@angular/core';

import {
  projects
} from '../../../core/data/projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {

  projects = projects;

}
