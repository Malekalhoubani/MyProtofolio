import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section class="content-section section-shell reveal" id="about">
      <div class="section-heading"><span class="section-index">01</span><p class="eyebrow">About me</p><h2>Engineering clarity into every layer.</h2></div>
      <div class="about-grid">
        <p class="about-lead">I’m a Computer Information Systems professional with hands-on experience across modern front-end interfaces, secure APIs, real-time systems, databases, and AI-assisted products.</p>
        <div class="about-detail"><p>My work lives where clean user experiences meet dependable engineering. I enjoy turning complex business needs into maintainable features — from live dashboards and audit trails to authentication, reporting, and data-heavy workflows.</p><p>Based in Amman, I’ve worked with local and international teams across enterprise platforms, business applications, and a university marketplace.</p></div>
        <aside class="principle-card"><span class="quote-mark">“</span><p>Build with care. Keep it secure. Make it easy to use.</p><span>My approach to software</span></aside>
      </div>
    </section>
  `,
})
export class AboutComponent {}
