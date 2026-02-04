import { Component, HostListener, Renderer2, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

import { AppImgComponent } from '../../shared/components/app-img/app-img.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TranslateModule, AppImgComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isScrolled = false;
  isMobileMenuOpen = false;
  isServicesExpanded = false;
  currentLang = 'en';

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private translate: TranslateService
  ) {
    this.currentLang = this.translate.currentLang || 'en';

    this.translate.onLangChange.subscribe(event => {
      this.currentLang = event.lang;
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    if (this.isMobileMenuOpen) {
      this.renderer.addClass(this.document.body, 'overflow-hidden');
    } else {
      this.renderer.removeClass(this.document.body, 'overflow-hidden');
      this.isServicesExpanded = false;
    }
  }

  toggleServices() {
    this.isServicesExpanded = !this.isServicesExpanded;
  }

  toggleLanguage() {
    const newLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.translate.use(newLang);
  }
}
