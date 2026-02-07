import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
            },
            {
                path: 'services/:slug',
                loadComponent: () => import('./features/service-details/service-details.component').then(m => m.ServiceDetailsComponent)
            },
            // { path: 'portfolio', component: PortfolioComponent }, // To be implemented
        ]
    }
];
