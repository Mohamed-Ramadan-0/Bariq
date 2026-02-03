import { Component, OnInit, ElementRef, ViewChildren, QueryList, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MockDataService } from '../../../../core/services/mock-data.service';
import { Stat } from '../../../../core/data/mock-db';

@Component({
    selector: 'app-intro-strip',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './intro-strip.component.html',
    styleUrl: './intro-strip.component.scss'
})
export class IntroStripComponent implements AfterViewInit {
    @ViewChildren('statItem') statItems!: QueryList<ElementRef>;

    stats: Stat[] = [];
    animatedValues: string[] = [];
    hasAnimated = false;
    currentLang = 'en';

    private isBrowser: boolean;

    constructor(
        private mockDataService: MockDataService,
        private translate: TranslateService,
        @Inject(PLATFORM_ID) platformId: Object
    ) {
        this.isBrowser = isPlatformBrowser(platformId);
        this.stats = this.mockDataService.getStats();
        this.animatedValues = this.stats.map(() => '0');
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
                    if (entry.isIntersecting && !this.hasAnimated) {
                        this.hasAnimated = true;
                        this.animateCounters();
                    }
                });
            },
            { threshold: 0.3 }
        );

        // Observe the first stat item
        if (this.statItems.first) {
            observer.observe(this.statItems.first.nativeElement);
        }
    }

    animateCounters() {
        this.stats.forEach((stat, index) => {
            const numericValue = parseInt(stat.value.replace(/[^0-9]/g, ''), 10);
            const suffix = stat.value.replace(/[0-9,]/g, '');
            const hasComma = stat.value.includes(',');

            const duration = 2000;
            const steps = 60;
            const stepDuration = duration / steps;
            let currentStep = 0;

            const interval = setInterval(() => {
                currentStep++;
                const progress = currentStep / steps;
                const easedProgress = this.easeOutQuart(progress);
                const currentValue = Math.floor(numericValue * easedProgress);

                if (hasComma) {
                    this.animatedValues[index] = currentValue.toLocaleString() + suffix;
                } else {
                    this.animatedValues[index] = currentValue + suffix;
                }

                if (currentStep >= steps) {
                    clearInterval(interval);
                    this.animatedValues[index] = stat.value;
                }
            }, stepDuration);
        });
    }

    private easeOutQuart(t: number): number {
        return 1 - Math.pow(1 - t, 4);
    }

    getLabel(stat: Stat): string {
        return this.currentLang === 'ar' ? stat.labelAr : stat.labelEn;
    }
}
