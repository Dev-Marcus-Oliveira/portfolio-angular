import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  faChevronDown,
  faChevronRight,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {
  isSkillsOpen: boolean = false;
  isWorkExperience: boolean = false;
  isEducation: boolean = false;

  faChevronDown = faChevronDown;
  faChevronRight = faChevronRight;
  faDownload = faDownload;

  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Marcus Vinicius - Resume');
  }

  DonwloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/Currículo-Marcus.pdf');
    link.setAttribute('download', 'Currículo-Marcus.pdf');
    link.click();
    link.remove();
  }
}
