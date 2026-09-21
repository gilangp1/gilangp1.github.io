import {
  Injectable,
  signal
} from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  theme = signal<Theme>('light');

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeTheme();
    }
  }

  initializeTheme(): void {
    const savedTheme = localStorage.getItem(
      'portfolio-theme'
    ) as Theme | null;

    const systemDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    const theme: Theme =
      savedTheme ??
      (systemDark ? 'dark' : 'light');

    this.setTheme(theme);
  }

  toggleTheme(): void {
    this.setTheme(
      this.theme() === 'light'
        ? 'dark'
        : 'light'
    );
  }

  setTheme(theme: Theme): void {
    this.theme.set(theme);

    if (typeof window !== 'undefined') {
      localStorage.setItem(
        'portfolio-theme',
        theme
      );

      document.documentElement.classList.toggle(
        'dark',
        theme === 'dark'
      );
    }
  }
}
