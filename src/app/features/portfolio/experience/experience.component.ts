import { Component } from '@angular/core';

import {
  experiences
} from '../../../core/data/experience.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {

  experiences = experiences;

}
