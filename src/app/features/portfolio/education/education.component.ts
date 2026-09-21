import { Component } from '@angular/core';

import {
  education
} from '../../../core/data/education.data';

@Component({
  selector: 'app-education',
  standalone: true,
  templateUrl: './education.component.html'
})
export class EducationComponent {

  education = education;

}
