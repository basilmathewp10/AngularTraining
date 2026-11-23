import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from '@openng/ngx-toastr';

@Component({
    selector: 'contact-container',
    imports: [ReactiveFormsModule],
    templateUrl: './contact.html',
    styleUrl: './contact.css'
})
export class ContactContainer {
    private toastr = inject(ToastrService);
    contactForm = new FormGroup({
        name: new FormControl('', [
            Validators.required,
            Validators.minLength(3)
        ]),

        email: new FormControl('', [
            Validators.required,
            Validators.email
        ]),

        subject: new FormControl('', [
            Validators.required,
            Validators.minLength(5)
        ]),

        message: new FormControl('', [
            Validators.required,
            Validators.minLength(10)
        ])
    });

    submitted = false;

    onSubmit() {
        this.submitted = true;

        if (this.contactForm.invalid) {
            this.contactForm.markAllAsTouched();
            this.toastr.error(
                'Please check all fields and try again.',
                'Invalid Form'
            );
            return;
        }

        console.log('Contact Form Data:', this.contactForm.value);

        this.toastr.success(
            'Your message has been submitted successfully!',
            'Message Submitted'
        );

        this.contactForm.reset();
        this.submitted = false;
    }
}