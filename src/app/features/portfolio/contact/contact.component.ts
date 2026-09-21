import { Component } from '@angular/core';

import {
  profile
} from '../../../core/data/profile.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html'
})
export class ContactComponent {

  profile = profile;

}
