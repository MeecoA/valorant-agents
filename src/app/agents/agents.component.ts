import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { IAgent } from './agent';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css'],
})
export class AgentsComponent implements OnInit {
  constructor(private service: DataService, private http: HttpClient) {}
  apiUrl = 'https://valorant-api.com/v1/agents';
  agents: IAgent[] = [];
  searchQuery!: string;

  searchAgents() {
    this.http
      .get(this.apiUrl)
      .pipe(
        map((res: any) =>
          res.data.filter((agent: any) =>
            agent.displayName.toLowerCase().includes(this.searchQuery)
          )
        )
      )
      .subscribe((data: any) => {
        this.agents = data;
      });
  }

  ngOnInit(): void {
    // this.service.getAgents().subscribe((data: any) => {
    //   this.agents = data.data;
    // });

    //new way to subscribe to an observable

    this.service.getAgents().subscribe({
      next: (data: IAgent[] | any) => {
        this.agents = data.data;
        console.log(data.data);
      },
    });
  }
}
