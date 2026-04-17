import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { SkillsService } from '../../app/services/skills.service';
@Component({
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class Skills {
service = inject(SkillsService) as SkillsService;
skills = this.service.skills;
}
