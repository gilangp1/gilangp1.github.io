import { Component, OnDestroy, OnInit, signal } from '@angular/core';

import {
  profile
} from '../../../core/data/profile.data';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {

  profile = profile;

  skillIcons = [
    'devicon-javascript-plain colored',
    'devicon-typescript-plain colored',
    'devicon-angularjs-plain colored',
    'devicon-nextjs-plain',
    'devicon-php-plain colored',
    'devicon-git-plain colored',
    'devicon-vscode-plain colored',
    'devicon-figma-plain colored'
  ];

  currentIconIndex = signal(0);
  private intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentIconIndex.update(i => (i + 1) % this.skillIcons.length);
    }, 2000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

}
