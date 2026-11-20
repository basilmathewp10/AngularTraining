import { Component, AfterViewInit, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'header-compo',
    imports: [RouterLink],
    templateUrl: './port-header.html',
    styleUrl: './port-header.css'
})
export class PortHeader implements AfterViewInit, OnDestroy {

    activeSection = signal('home');

    private observer?: IntersectionObserver;

    ngAfterViewInit(): void {
        const sections = document.querySelectorAll('main.home-page section[id]');

        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        this.activeSection.set(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-100px 0px -60% 0px',
                threshold: 0
            }
        );

        sections.forEach((section) => {
            this.observer?.observe(section);
        });
    }

    ngOnDestroy(): void {
        this.observer?.disconnect();
    }
}