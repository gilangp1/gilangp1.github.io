import {
  Component,
  inject,
  signal
} from '@angular/core';

import {
  ThemeService
} from '../../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  private themeService =
    inject(ThemeService);

  mobileMenuOpen =
    signal(false);

  menuItems = [
    {
      label: 'Home',
      target: 'home'
    },
    {
      label: 'Skills',
      target: 'skills'
    },
    {
      label: 'Projects',
      target: 'projects'
    },
    {
      label: 'Experience',
      target: 'experience'
    },
    {
      label: 'Education',
      target: 'education'
    },
    {
      label: 'Resume',
      target: 'resume'
    }
  ];

  toggleMenu(): void {
    this.mobileMenuOpen.update(
      value => !value
    );
  }

  closeMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
