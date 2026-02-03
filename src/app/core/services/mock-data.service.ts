import { Injectable } from '@angular/core';
import { STATS, SERVICES, PROJECTS, Stat, Service, Project } from '../data/mock-db';

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
}
