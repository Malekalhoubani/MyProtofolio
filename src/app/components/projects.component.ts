import { Component } from '@angular/core';
import { projects } from '../portfolio-data';

@Component({
  selector: 'app-projects',
  template: `
    <section class="content-section projects-section reveal" id="projects"><div class="section-shell">
      <div class="section-heading split-heading"><div><span class="section-index">03</span><p class="eyebrow">Selected work</p></div><h2>Projects shaped around real people and real processes.</h2></div>
      <div class="project-grid">
        @for (project of projects; track project.number; let first = $first) {
          <article class="project-card" [class.featured]="first" [attr.data-accent]="project.accent">
            <div class="project-top"><span>{{ project.number }}</span><span class="project-type">{{ project.type }}</span></div>
            <div class="project-body"><h3>{{ project.title }}</h3><p>{{ project.description }}</p><ul>@for (highlight of project.highlights; track highlight) { <li><span>↗</span>{{ highlight }}</li> }</ul></div>
            <div class="chip-row">@for (technology of project.stack; track technology) { <span>{{ technology }}</span> }</div>
          </article>
        }
      </div>
    </div></section>
  `,
})
export class ProjectsComponent { protected readonly projects = projects; }
