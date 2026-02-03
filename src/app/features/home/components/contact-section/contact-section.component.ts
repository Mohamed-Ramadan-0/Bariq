import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AppImgComponent } from '../../../../shared/components/app-img/app-img.component';

interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
}

@Component({
    selector: 'app-contact-section',
    standalone: true,
    imports: [CommonModule, FormsModule, TranslateModule, AppImgComponent],
    templateUrl: './contact-section.component.html',
    styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {
    formData: ContactForm = {
        name: '',
        email: '',
        subject: '',
        message: ''
    };

    isSubmitting = false;
    isSubmitted = false;
    hasError = false;

    onSubmit() {
        if (!this.isFormValid()) return;

        this.isSubmitting = true;
        this.hasError = false;

        // Simulate API call
        setTimeout(() => {
            this.isSubmitting = false;
            this.isSubmitted = true;
            this.resetForm();

            // Reset success state after 5 seconds
            setTimeout(() => {
                this.isSubmitted = false;
            }, 5000);
        }, 2000);
    }

    isFormValid(): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return (
            this.formData.name.trim() !== '' &&
            emailRegex.test(this.formData.email) &&
            this.formData.subject.trim() !== '' &&
            this.formData.message.trim() !== ''
        );
    }

    private resetForm() {
        this.formData = {
            name: '',
            email: '',
            subject: '',
            message: ''
        };
    }
}
