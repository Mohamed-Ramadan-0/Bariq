import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { IntroStripComponent } from './components/intro-strip/intro-strip.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { ClientsSectionComponent } from './components/clients-section/clients-section.component';
import { LeadMagnetComponent } from './components/lead-magnet/lead-magnet.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    IntroStripComponent,
    ServicesSectionComponent,
    ProjectsSectionComponent,
    ClientsSectionComponent,
    LeadMagnetComponent,
    ContactSectionComponent
  ],
  template: `
    <main class="home-page">
      <app-hero-section></app-hero-section>
      <app-intro-strip></app-intro-strip>
      <app-services-section></app-services-section>
      <app-projects-section></app-projects-section>
      <app-clients-section></app-clients-section>
      <app-lead-magnet></app-lead-magnet>
      <app-contact-section></app-contact-section>
    </main>
  `,
  styles: [`
    .home-page {
      min-height: 100vh;
    }
  `]
})
export class HomeComponent { }
