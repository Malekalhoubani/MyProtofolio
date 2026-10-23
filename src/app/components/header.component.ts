import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="site-header">
      <a class="brand" href="#home" aria-label="Malek Alhoubani home"><span class="brand-mark">MA</span><span class="brand-name">Malek Alhoubani</span></a>
      <nav [class.is-open]="menuOpen()" aria-label="Primary navigation">
        <a href="#about" (click)="closeMenu()">About</a><a href="#experience" (click)="closeMenu()">Experience</a>
        <a href="#projects" (click)="closeMenu()">Projects</a><a href="#skills" (click)="closeMenu()">Skills</a><a href="#contact" (click)="closeMenu()">Contact</a>
      </nav>
      <div class="header-actions">
        <button class="theme-toggle" type="button" (click)="toggleTheme()" [attr.aria-label]="isLight() ? 'Use dark theme' : 'Use light theme'"><span aria-hidden="true">{{ isLight() ? '◐' : '◑' }}</span></button>
        <button class="menu-toggle" type="button" (click)="menuOpen.set(!menuOpen())" [attr.aria-expanded]="menuOpen()" aria-label="Toggle navigation"><span></span><span></span></button>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  readonly menuOpen = signal(false);
  readonly isLight = signal(false);
  toggleTheme(): void { this.isLight.update((value) => !value); document.documentElement.dataset['theme'] = this.isLight() ? 'light' : 'dark'; }
  closeMenu(): void { this.menuOpen.set(false); }
}
