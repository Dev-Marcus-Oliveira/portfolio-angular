import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faSquareGithub,
  faSquareInstagram,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  faEnvelopeOpenText = faEnvelopeOpenText;
  faLinkedin = faLinkedin;
  faSquareGithub = faSquareGithub;
  faSquareInstagram = faSquareInstagram;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Marcus Vinicius - Contact');
  }
}
