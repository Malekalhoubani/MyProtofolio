import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="contact-section reveal" id="contact"><div class="section-shell contact-inner">
      <p class="eyebrow">Let’s connect</p><h2>Have an opportunity where thoughtful engineering matters?</h2>
      <p class="contact-intro">I’m open to full-stack development opportunities and conversations about building useful, reliable software.</p>
      <a class="contact-email" href="mailto:malekalhoubani77@gmail.com">malekalhoubani77&#64;gmail.com <span>↗</span></a>
      <div class="contact-links"><a href="tel:+962791972859"><span>Phone</span><strong>+962 79 197 2859</strong></a><div><span>Location</span><strong>Amman, Jordan</strong></div><a href="Malek_Alhoubani_CV.pdf" download><span>Résumé</span><strong>Download PDF ↓</strong></a></div>
    </div></section>
  `,
})
export class ContactComponent {}
