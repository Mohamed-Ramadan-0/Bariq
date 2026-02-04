import { Component, ElementRef, ViewChild, AfterViewInit, ViewEncapsulation, HostListener, Inject, PLATFORM_ID, NgZone } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
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
    @ViewChild('heroBg') heroBg!: ElementRef;

    isVisible = false;
    parallaxTransform = 'scale(1.1) translateX(0px)';

    private isBrowser: boolean;
    private ticking = false;

    constructor(
        @Inject(PLATFORM_ID) platformId: Object,
        private ngZone: NgZone
    ) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    ngAfterViewInit() {
        // Trigger staggered animations after a short delay
        setTimeout(() => {
            this.isVisible = true;
        }, 100);

        // Initialize scroll listener outside Angular zone for performance
        if (this.isBrowser) {
            this.ngZone.runOutsideAngular(() => {
                window.addEventListener('scroll', this.onScroll.bind(this), { passive: true });
            });
        }
    }

    private onScroll() {
        if (!this.ticking) {
            requestAnimationFrame(() => {
                this.updateParallax();
                this.ticking = false;
            });
            this.ticking = true;
        }
    }

    private updateParallax() {
        if (!this.isBrowser) return;

        const scrollY = window.scrollY;
        const heroHeight = window.innerHeight;

        // Only apply parallax while hero is in view
        if (scrollY <= heroHeight) {
            // Calculate vertical movement (subtle pan UP as user scrolls down)
            const moveY = scrollY * 0.08; // Reduced speed factor for subtle movement

            // Apply transform to background image
            const images = document.querySelectorAll('.hero-bg .app-image');
            images.forEach((img: Element) => {
                (img as HTMLElement).style.transform = `scale(1.1) translateY(${moveY}px)`;
            });
        }
    }

    ngOnDestroy() {
        if (this.isBrowser) {
            window.removeEventListener('scroll', this.onScroll.bind(this));
        }
    }
}
