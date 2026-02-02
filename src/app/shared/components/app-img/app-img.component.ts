import { Component, Input, ViewEncapsulation, HostBinding, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagekitService } from 'imagekitio-angular';

@Component({
  selector: 'app-img',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="img-container" 
         [ngClass]="containerClass" 
         [style.aspect-ratio]="aspectRatio"
         [style.width.px]="width"
         [style.height.px]="height">
        <img *ngIf="currentUrl"
             [src]="currentUrl"
             [attr.alt]="alt"
             [loading]="priority ? 'eager' : 'lazy'"
             (load)="onLoad()"
             class="app-image"
             [class.visible]="isLoaded"
        >
    </div>
  `,
  styles: [`
    :host {
      display: inline-block;
    }

    .img-container {
        display: block;
        position: relative;
        overflow: hidden;
        background-color: #1a1a1a;
    }

    /* Shimmer Effect */
    .img-container::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
        transform: translateX(-100%);
        animation: shimmer 1.5s infinite;
        z-index: 1;
    }

    /* Stop shimmer and background when host is loaded */
    :host.loaded .img-container::after {
        display: none;
    }

    :host.loaded .img-container {
        background-color: transparent;
    }

    .app-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
      display: block;
      will-change: opacity;
      position: relative;
      z-index: 2;
    }

    /* Reveal image when loaded */
    .app-image.visible {
      opacity: 1;
    }

    @keyframes shimmer {
        100% { transform: translateX(100%); }
    }
  `],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppImgComponent implements OnInit, OnChanges {
  @Input() path?: string;
  @Input() src?: string;
  @Input() alt: string = '';
  @Input() width?: number;
  @Input() height?: number;
  @Input() priority: boolean = false;
  @Input() containerClass: string = '';

  isLoaded = false;
  currentUrl: string = '';

  @HostBinding('class.loaded') get loaded() {
    return this.isLoaded;
  }

  constructor(private imagekit: ImagekitService) { }

  ngOnInit() {
    this.updateUrl();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['path'] || changes['src'] || changes['width'] || changes['height']) {
      this.updateUrl();
    }
  }

  get aspectRatio(): string | undefined {
    if (this.width && this.height) {
      return `${this.width} / ${this.height}`;
    }
    return undefined;
  }

  updateUrl() {
    const config: any = {
      transformation: []
    };

    if (this.src) {
      config.src = this.src;
    } else if (this.path) {
      config.path = this.path;
    } else {
      return;
    }

    // Step 1: Trim transparent/solid color edges from source image FIRST
    config.transformation.push({ trim: 'true' });

    // Step 2: Resize with 2x dimensions for Retina sharpness
    // We manually multiply dimensions by 2 to ensure crisp rendering
    if (this.width && this.height) {
      config.transformation.push({
        width: (this.width * 2).toString(),
        height: (this.height * 2).toString(),
        cropMode: 'pad_resize',
        background: '00000000' // Transparent background
      });
    } else {
      if (this.width) {
        config.transformation.push({ width: (this.width * 2).toString() });
      }
      if (this.height) {
        config.transformation.push({ height: (this.height * 2).toString() });
      }
    }

    this.currentUrl = this.imagekit.getUrl(config);
  }

  onLoad() {
    this.isLoaded = true;
  }
}