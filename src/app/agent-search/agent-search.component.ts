import { Component, OnInit } from '@angular/core';
import { IAgent } from '../agents/agent';
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-agent-search',
  templateUrl: './agent-search.component.html',
  styleUrls: ['./agent-search.component.css'],
})
export class AgentSearchComponent implements OnInit {
  agents: IAgent | undefined;
  searchQuery!: string;

  private searchTerm = new Subject<string>();

  constructor(private service: DataService, private http: HttpClient) {}

  // search(term: string) {
  //   this.searchTerm.next(term);
  // }

  searchAgents() {
    const apiUrl = `https://valorant-api.com/v1/agents?search=${this.searchQuery}`;

    this.http.get(apiUrl).subscribe({
      next: (data: IAgent[] | any) => {
        console.log(data);
        this.agents = data.data;
      },
    });
  }

  ngOnInit(): void {
    // this.agents$ = this.searchTerm.pipe(
    //   debounceTime(300),
    //   distinctUntilChanged(),
    //   switchMap((term: string) => this.service.searchHeroes(term))
    // );
  }
}
