import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-lead-magnet',
    standalone: true,
    imports: [CommonModule, FormsModule, TranslateModule],
    templateUrl: './lead-magnet.component.html',
    styleUrl: './lead-magnet.component.scss'
})
export class LeadMagnetComponent {
    email = '';
    isSubmitting = false;
    isSubmitted = false;

    onSubmit() {
        if (!this.email || !this.isValidEmail(this.email)) return;

        this.isSubmitting = true;

        // Simulate API call
        setTimeout(() => {
            this.isSubmitting = false;
            this.isSubmitted = true;
            this.email = '';

            // Reset after 5 seconds
            setTimeout(() => {
                this.isSubmitted = false;
            }, 5000);
        }, 1500);
    }

    private isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}
