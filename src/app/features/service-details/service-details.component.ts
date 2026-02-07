import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { MockDataService } from '../../core/services/mock-data.service';
import { DetailedService } from '../../core/data/mock-db';
import { AppImgComponent } from '../../shared/components/app-img/app-img.component';

@Component({
    selector: 'app-service-details',
    standalone: true,
    imports: [CommonModule, RouterLink, TranslateModule, AppImgComponent],
    templateUrl: './service-details.component.html',
    styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {
    service: DetailedService | undefined;
    currentLang: string = 'en';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private mockDataService: MockDataService,
        private translate: TranslateService
    ) {
        this.currentLang = this.translate.currentLang || 'en';
    }

    ngOnInit(): void {
        // Subscribe to language changes
        this.translate.onLangChange.subscribe(event => {
            this.currentLang = event.lang;
        });

        // Get slug from route params
        this.route.paramMap.subscribe(params => {
            const slug = params.get('slug');
            if (slug) {
                this.service = this.mockDataService.getServiceBySlug(slug);
                if (!this.service) {
                    // Redirect to home if service not found
                    this.router.navigate(['/']);
                }
            }
        });
    }

    // Helper to get localized content
    getLocalized(en: string, ar: string): string {
        return this.currentLang === 'ar' ? ar : en;
    }
}
