import { Injectable } from '@angular/core';
import { STATS, SERVICES, PROJECTS, DETAILED_SERVICES, Stat, Service, Project, DetailedService } from '../data/mock-db';

@Injectable({
    providedIn: 'root'
})
export class MockDataService {

    getStats(): Stat[] {
        return STATS;
    }

    getServices(): Service[] {
        return SERVICES;
    }

    getProjects(): Project[] {
        return PROJECTS;
    }

    getServiceById(id: number): Service | undefined {
        return SERVICES.find(s => s.id === id);
    }

    getProjectById(id: number): Project | undefined {
        return PROJECTS.find(p => p.id === id);
    }

    // Detailed Services for Service Details Page
    getAllDetailedServices(): DetailedService[] {
        return DETAILED_SERVICES;
    }

    getServiceBySlug(slug: string): DetailedService | undefined {
        return DETAILED_SERVICES.find(service => service.slug === slug);
    }
}
