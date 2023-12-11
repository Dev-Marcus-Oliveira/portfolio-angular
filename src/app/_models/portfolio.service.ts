import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private apiUrl = 'https://portfolio-db-json.vercel.app/projects';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  getProjectById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  setFeaturedProjects(ids: number[]): Observable<Project[]> {
    const observables: Observable<Project>[] = ids.map((id: number) => {
      return this.getProjectById(id);
    });

    return forkJoin(observables);
  }
}

export interface Project {
  id: number;
  name: string;
  summary: string;
  description: string;
  githubLink: string;
  vercelLink: string;
  pictures: string[];
  tags: string[];
}
