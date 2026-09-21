import {
  Component,
  computed,
  signal
} from '@angular/core';

import {
  skills
} from '../../../core/data/skills.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html'
})
export class SkillsComponent {

  skills = skills;

  selectedCategory =
    signal('All');

  categories = [
    'All',
    'Languages & Frameworks',
    'Tools',
    'Practices'
  ];

  filteredSkills =
    computed(() => {

      const category =
        this.selectedCategory();

      if (category === 'All') {
        return this.skills;
      }

      return this.skills.filter(
        skill =>
          skill.category === category
      );

    });

  selectCategory(
    category: string
  ): void {

    this.selectedCategory.set(
      category
    );

  }

}
