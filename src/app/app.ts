import { afterNextRender, Component, HostListener, signal } from '@angular/core';
import { HeaderComponent } from './components/header.component';
import { HeroComponent } from './components/hero.component';
import { AboutComponent } from './components/about.component';
import { ExperienceComponent } from './components/experience.component';
import { ProjectsComponent } from './components/projects.component';
import { SkillsComponent } from './components/skills.component';
import { ContactComponent } from './components/contact.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeroComponent, AboutComponent, ExperienceComponent, ProjectsComponent, SkillsComponent, ContactComponent, FooterComponent],
  templateUrl: './portfolio-app.html',
})
export class App {
  protected readonly scrollProgress = signal(0);

  constructor() {
    afterNextRender(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
      this.updateScrollProgress();
    });
  }

  @HostListener('window:scroll')
  protected updateScrollProgress(): void {
    const distance = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress.set(distance > 0 ? (window.scrollY / distance) * 100 : 0);
  }
}
