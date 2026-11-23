
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideToastr } from '@openng/ngx-toastr';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(
            routes,
            withInMemoryScrolling({
                anchorScrolling: 'enabled',
                scrollPositionRestoration: 'enabled'
            })
        ),

        provideToastr({
            timeOut: 3000,
            positionClass: 'toast-top-right',
            preventDuplicates: true,
            progressBar: true,
            closeButton: true
        })
    ]
};
