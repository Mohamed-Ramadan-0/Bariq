import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TranslateModule, HeaderComponent, FooterComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    // Set default language and use it
    this.translate.setDefaultLang('en');
    this.translate.use('en');

    // Update direction and lang attributes when language changes
    this.translate.onLangChange.subscribe((event) => {
      const dir = event.lang === 'ar' ? 'rtl' : 'ltr';
      this.renderer.setAttribute(this.document.documentElement, 'dir', dir);
      this.renderer.setAttribute(this.document.documentElement, 'lang', event.lang);
    });
  }
}
