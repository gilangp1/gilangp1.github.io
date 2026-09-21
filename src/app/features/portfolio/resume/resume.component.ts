import { Component } from '@angular/core';

import {
  profile
} from '../../../core/data/profile.data';

@Component({
  selector: 'app-resume',
  standalone: true,
  templateUrl: './resume.component.html'
})
export class ResumeComponent {

  profile = profile;

}
