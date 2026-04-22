import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  projects = signal([
    {
      title: 'Employee Management System',
      desc: 'Built a full-featured Angular SPA with CRUD operations, role-based access control (RBAC), and JWT authentication. Implemented lazy loading and optimized performance using OnPush strategy.',
      tech: 'Angular, RxJS, REST API',
      link: ''
    },
    {
      title: 'User Form with Validation',
      desc: 'Developed reactive forms with custom validators, real-time validation, and error handling. Ensured robust user input handling and improved UX.',
      tech: 'Angular, Reactive Forms',
      link: 'https://divyathomas-97.github.io/UserForm/'
    },
    {
      title: 'Food Delivery App',
      desc: 'Created a responsive food ordering UI with product listing, cart functionality, and smooth user experience using Angular Material.',
      tech: 'Angular, Material UI',
      link: 'https://divyathomas-97.github.io/food-app/'
    }
  ]);
}
