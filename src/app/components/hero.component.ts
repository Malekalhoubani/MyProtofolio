import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <section class="hero section-shell" id="home">
      <div class="hero-copy">
        <div class="status-pill"><span></span> Open to full-stack opportunities</div>
        <p class="eyebrow">Full-stack developer · Amman, Jordan</p>
        <h1>I build dependable digital systems that <em>feel effortless.</em></h1>
        <p class="hero-intro">I’m Malek — a Computer Information Systems graduate creating secure, responsive web products with Angular, ASP.NET Core, SQL, and thoughtful AI integration.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#projects">Explore my work <span aria-hidden="true">↗</span></a>
          <a class="button button-secondary" href="Malek_Alhoubani_CV.pdf" download>Download CV <span aria-hidden="true">↓</span></a>
        </div>
        <div class="hero-meta" aria-label="Career summary">
          <div><strong>2025</strong><span>CIS graduate</span></div><div><strong>3</strong><span>development roles</span></div><div><strong>Full stack</strong><span>web focus</span></div>
        </div>
      </div>
      <div class="hero-visual" aria-hidden="true">
        <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
        <div class="monogram-card">
          <div class="window-dots"><i></i><i></i><i></i></div>
          <div class="code-line"><span>const</span> developer = &#123;</div>
          <div class="code-line indent">name: <b>'Malek'</b>,</div><div class="code-line indent">craft: <b>'full-stack'</b>,</div>
          <div class="code-line indent">mindset: <b>'always learning'</b></div><div class="code-line">&#125;;</div>
          <div class="pulse-row"><i></i> systems online</div>
        </div>
        <span class="floating-tag tag-angular">Angular</span><span class="floating-tag tag-dotnet">.NET</span><span class="floating-tag tag-sql">SQL</span>
      </div>
    </section>
    <div class="tech-rail" aria-label="Core technologies"><div><span>Angular</span><i>✦</i><span>ASP.NET Core</span><i>✦</i><span>SignalR</span><i>✦</i><span>SQL</span><i>✦</i><span>Azure</span><i>✦</i><span>REST APIs</span></div></div>
  `,
})
export class HeroComponent {}
