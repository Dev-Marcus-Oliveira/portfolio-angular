// project-modal.component.ts
import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '../_models/portfolio.service';
import { TagColors } from '../_models/Tag';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css'],
})
export class ProjectModalComponent {
  @Input() project: Project | undefined;

  transformTagsToUpper(tags: string[]): string[] {
    return tags.map((tag) => tag.toUpperCase());
  }

  getTagColor(tag: string): string {
    return TagColors[tag] || 'gray';
  }

  constructor(public bsModalRef: BsModalRef) {}
}
