import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ProjectsService } from '../../app/services/projects.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  imports: [NgFor, MatCardModule, MatIconModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects {
  service = inject(ProjectsService) as ProjectsService;
  projects = this.service.projects;

  openLink(url: string) {
  window.open(url, '_blank');
}

}
