import { Component, Input } from '@angular/core';
import { Project } from '../_models/portfolio.service';
import { TagColors } from '../_models/Tag';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent {
  @Input() project: Project | undefined;

  bsModalRef?: BsModalRef;

  transformTagsToUpper(tags: string[]): string[] {
    return tags.map((tag) => tag.toUpperCase());
  }
  getTagColor(tag: string): string {
    return TagColors[tag] || 'gray';
  }

  constructor(private modalService: BsModalService) {}

  OpenProjectModal() {
    const modalOptions: ModalOptions = {
      class: 'modal-lg',
      initialState: {
        project: this.project,
      },
    };
    this.bsModalRef = this.modalService.show(
      ProjectModalComponent,
      modalOptions
    );
  }
}
