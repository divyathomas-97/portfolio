import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SkillsService {
  skills = signal([
    {
      category: 'Frontend',
      items: ['Angular (v14–v21)', 'TypeScript', 'HTML5', 'CSS3', 'SCSS']
    },
    {
      category: 'State Management',
      items: ['RxJS', 'Observables', 'Subjects', 'BehaviorSubject']
    },
    {
      category: 'UI Frameworks',
      items: ['Angular Material', 'Bootstrap']
    },
    {
      category: 'Core Concepts',
      items: ['SPA', 'Lazy Loading', 'Route Guards', 'RBAC', 'JWT Authentication']
    },
    {
      category: 'API Integration',
      items: ['REST APIs', 'Angular HttpClient', 'Postman']
    },
    {
      category: 'Tools & Platforms',
      items: ['Git', 'GitHub', 'Angular CLI', 'Node.js', 'VS Code', 'Webstorm']
    },
    {
      category: 'Testing',
      items: ['Jasmine', 'Karma']
    },
    {
      category: 'Methodologies',
      items: ['Agile', 'Scrum', 'SDLC']
    },
    {
      category: 'Performance',
      items: ['OnPush Change Detection', 'Bundle Optimization']
    }
  ]);
}
