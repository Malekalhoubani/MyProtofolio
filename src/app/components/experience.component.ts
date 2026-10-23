import { Component } from '@angular/core';
import { experiences } from '../portfolio-data';

@Component({
  selector: 'app-experience',
  template: `
    <section class="content-section section-shell reveal" id="experience">
      <div class="section-heading split-heading"><div><span class="section-index">02</span><p class="eyebrow">Experience</p></div><h2>From responsive interfaces to secure enterprise workflows.</h2></div>
      <div class="timeline">
        @for (item of experiences; track item.company; let first = $first) {
          <article class="experience-card" [class.current]="first">
            <div class="timeline-marker"><span></span></div>
            <div class="experience-meta"><span class="period">{{ item.period }}</span><span>{{ item.location }}</span></div>
            <div class="experience-main">
              <div class="role-line"><div><h3>{{ item.role }}</h3><p>{{ item.company }}</p></div>@if (first) { <span class="current-badge">Current</span> }</div>
              <p class="experience-summary">{{ item.summary }}</p>
              <ul>@for (highlight of item.highlights; track highlight) { <li>{{ highlight }}</li> }</ul>
              <div class="chip-row">@for (technology of item.stack; track technology) { <span>{{ technology }}</span> }</div>
            </div>
          </article>
        }
      </div>
    </section>
  `,
})
export class ExperienceComponent { protected readonly experiences = experiences; }
