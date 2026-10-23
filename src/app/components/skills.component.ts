import { Component } from '@angular/core';
import { skillGroups } from '../portfolio-data';

@Component({
  selector: 'app-skills',
  template: `
    <section class="content-section section-shell reveal" id="skills">
      <div class="section-heading split-heading"><div><span class="section-index">04</span><p class="eyebrow">Skills & learning</p></div><h2>A practical toolkit for end-to-end product development.</h2></div>
      <div class="skills-grid">
        @for (group of skillGroups; track group.title; let index = $index) {
          <article class="skill-card"><span class="skill-number">0{{ index + 1 }}</span><h3>{{ group.title }}</h3><div class="skill-list">@for (skill of group.skills; track skill) { <span>{{ skill }}</span> }</div></article>
        }
      </div>
      <div class="learning-grid">
        <div><p class="eyebrow">Education</p><h3>B.Sc. Computer Information Systems</h3><p>The Hashemite University · Amman, Jordan</p><span>Sep 2021 - Feb 2025</span></div>
        <div><p class="eyebrow">Courses & certificates</p><ul><li>Angular fundamentals and single-page applications</li><li>ASP.NET Core Web API fundamentals</li><li>Front-End Web Development · Elzero School</li><li>PHP Programming · W3Schools</li></ul></div>
        <div><p class="eyebrow">Languages</p><div class="language-row"><strong>Arabic</strong><span>Native</span></div><div class="language-row"><strong>English</strong><span>AMIDEAST · Level 2B</span></div></div>
      </div>
      <div class="volunteer-strip"><div><p class="eyebrow">Community</p><h3>Ruwwad Al Tanmeya</h3></div><p>Supported website monitoring and content compliance, and guided students through Python fundamentals, debugging, and hands-on projects.</p></div>
    </section>
  `,
})
export class SkillsComponent { protected readonly skillGroups = skillGroups; }
