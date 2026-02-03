import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MockDataService } from '../../../../core/services/mock-data.service';
import { Service } from '../../../../core/data/mock-db';
import { AppImgComponent } from '../../../../shared/components/app-img/app-img.component';

@Component({
    selector: 'app-services-section',
    standalone: true,
    imports: [CommonModule, RouterLink, TranslateModule, AppImgComponent],
    templateUrl: './services-section.component.html',
    styleUrl: './services-section.component.scss'
})
export class ServicesSectionComponent implements AfterViewInit {
    @ViewChild('servicesContainer') servicesContainer!: ElementRef;

    services: Service[] = [];
    currentLang = 'en';
    isVisible = false;

    private isBrowser: boolean;

    constructor(
        private mockDataService: MockDataService,
        private translate: TranslateService,
        @Inject(PLATFORM_ID) platformId: Object
    ) {
        this.isBrowser = isPlatformBrowser(platformId);
        this.services = this.mockDataService.getServices();
        this.currentLang = this.translate.currentLang || 'en';

        this.translate.onLangChange.subscribe(event => {
            this.currentLang = event.lang;
        });
    }

    ngAfterViewInit() {
        if (!this.isBrowser) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.isVisible = true;
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (this.servicesContainer) {
            observer.observe(this.servicesContainer.nativeElement);
        }
    }

    getTitle(service: Service): string {
        return this.currentLang === 'ar' ? service.titleAr : service.titleEn;
    }

    getDescription(service: Service): string {
        return this.currentLang === 'ar' ? service.descAr : service.descEn;
    }
}
