import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/portfolio.service';
import { PortfolioService } from '../_models/portfolio.service';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  projects: any[] = [];
  faFilter = faFilter;

  isCollapsed: boolean = true;
  technologies: string[] = ['HTML', 'CSS', 'SCSS', 'BOOTSTRAP', 'TAILWIND'];
  technologies2: string[] = [
    'JAVASCRIPT',
    'TYPESCRIPT',
    'REACT',
    'ANGULAR',
    'ASPNET',
  ];
  selectedTechnologies: string[] = [];

  constructor(
    private titleService: Title,
    private portfolioService: PortfolioService
  ) {
    this.titleService.setTitle('Marcus Vinicius - Portfolio');
  }

  ngOnInit(): void {
    this.portfolioService.getProjects().subscribe(
      (data: any) => {
        this.projects = data;
      },
      (error: any) => {
        console.error('Erro ao obter projetos:', error);
      }
    );
  }

  get filteredProjects(): any[] {
    if (this.selectedTechnologies.length === 0) {
      return this.projects; // Nenhum filtro aplicado, retornar todos os projetos
    }

    // Filtre os projetos com base nas tecnologias selecionadas
    return this.projects.filter((project) =>
      this.selectedTechnologies.every((selectedTech) =>
        project.tags.includes(selectedTech)
      )
    );
  }

  toggleFilter(technology: string): void {
    if (this.isTechnologySelected(technology)) {
      // Remove a tecnologia se já estiver selecionada
      this.selectedTechnologies = this.selectedTechnologies.filter(
        (selectedTech) => selectedTech !== technology
      );
    } else {
      // Adiciona a tecnologia se não estiver selecionada
      this.selectedTechnologies.push(technology);
    }
  }

  isTechnologySelected(technology: string): boolean {
    return this.selectedTechnologies.includes(technology);
  }

  ResetFilters(): void {
    this.selectedTechnologies = [];
  }
}
