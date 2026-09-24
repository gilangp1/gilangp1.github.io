import { Component } from '@angular/core';

import {
  profile
} from '../../../core/data/profile.data';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html'
})
export class HomeComponent {

  profile = profile;

  tools = [
    { name: 'Angular', icon: 'devicon-angularjs-plain' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain' },
    { name: 'Next.js', icon: 'devicon-nextjs-plain' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain' },
    { name: 'Figma', icon: 'devicon-figma-plain' },
    { name: 'Git', icon: 'devicon-git-plain' }
  ];

}
