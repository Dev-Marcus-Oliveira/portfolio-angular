import { Component } from '@angular/core';
import {
  faLinkedin,
  faSquareGithub,
  faSquareInstagram,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  faLinkedin = faLinkedin;
  faSquareGithub = faSquareGithub;
  faSquareInstagram = faSquareInstagram;
}
