import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { PortfolioService, Project } from '../_models/portfolio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  featuredProjects: any[] = [];

  loadingFeaturedProjects = true;
  project: any;

  constructor(
    private titleService: Title,
    private projectService: ProjectsService,
    private portfolioService: PortfolioService
  ) {
    this.titleService.setTitle('Marcus Vinicius - Home');
  }

  ngOnInit(): void {
    const featuredProjectIds = [11];

    this.portfolioService.setFeaturedProjects(featuredProjectIds).subscribe(
      (projects: Project[]) => {
        this.featuredProjects = projects;
        this.loadingFeaturedProjects = false;
      },
      (error: any) => {
        console.error('Erro ao obter projetos em destaque:', error);
        this.loadingFeaturedProjects = false;
      }
    );
  }
}
