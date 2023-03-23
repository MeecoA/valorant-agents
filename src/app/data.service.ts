import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

import { IAgent } from './agents/agent';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://valorant-api.com/v1/agents';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getAgents(): Observable<IAgent[]> {
    return this.http.get<IAgent[]>(this.apiUrl);
  }

  getAgent(id: string): Observable<IAgent> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<IAgent>(url);
  }

  updateAgent(agent: IAgent): Observable<IAgent> {
    return this.http.put<IAgent>(this.apiUrl, agent, this.httpOptions);
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<IAgent[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<IAgent[]>(`${this.apiUrl}/?name=${term}`).pipe();
  }
}
