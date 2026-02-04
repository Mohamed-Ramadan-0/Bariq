import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MockDataService } from '../../../../core/services/mock-data.service';
import { Project } from '../../../../core/data/mock-db';
import { AppImgComponent } from '../../../../shared/components/app-img/app-img.component';

@Component({
    selector: 'app-projects-section',
    standalone: true,
    imports: [CommonModule, RouterLink, TranslateModule, AppImgComponent],
    templateUrl: './projects-section.component.html',
    styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent {
    projects: Project[] = [];
    currentLang = 'en';

    constructor(
        private mockDataService: MockDataService,
        private translate: TranslateService
    ) {
        this.projects = this.mockDataService.getProjects();
        this.currentLang = this.translate.currentLang || 'en';

        this.translate.onLangChange.subscribe(event => {
            this.currentLang = event.lang;
        });
    }

    getClient(project: Project): string {
        return this.currentLang === 'ar' ? project.clientAr : project.clientEn;
    }

    getCategory(category: string): string {
        const categoryMap: { [key: string]: string } = {
            'Facades': this.currentLang === 'ar' ? 'واجهات' : 'Facades',
            'Wayfinding': this.currentLang === 'ar' ? 'أنظمة توجيه' : 'Wayfinding',
            '3D Letters': this.currentLang === 'ar' ? 'حروف بارزة' : '3D Letters'
        };
        return categoryMap[category] || category;
    }
}
