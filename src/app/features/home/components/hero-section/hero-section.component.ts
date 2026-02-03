import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AppImgComponent } from '../../../../shared/components/app-img/app-img.component';

@Component({
    selector: 'app-hero-section',
    standalone: true,
    imports: [CommonModule, RouterLink, TranslateModule, AppImgComponent],
    templateUrl: './hero-section.component.html',
    styleUrl: './hero-section.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class HeroSectionComponent implements AfterViewInit {
    @ViewChild('heroContent') heroContent!: ElementRef;

    isVisible = false;

    ngAfterViewInit() {
        // Trigger staggered animations after a short delay
        setTimeout(() => {
            this.isVisible = true;
        }, 100);
    }
}
