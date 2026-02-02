import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            // { path: '', component: HomeComponent }, // To be implemented
            // { path: 'services', component: ServicesComponent }, // To be implemented
        ]
    }
];
