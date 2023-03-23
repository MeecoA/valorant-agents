import { Component, OnInit } from '@angular/core';
import { IAgent } from '../agents/agent';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-agent-detail',
  templateUrl: './agent-detail.component.html',
  styleUrls: ['./agent-detail.component.css'],
})
export class AgentDetailComponent implements OnInit {
  agent: IAgent | undefined;

  constructor(
    private service: DataService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    //geth the id from route
    const id = String(this.route.snapshot.paramMap.get('agentId'));
    this.getAgent(id);
  }

  getAgent(id: string) {
    this.service.getAgent(id).subscribe({
      next: (data: IAgent[] | any) => {
        console.log(data);
        this.agent = data.data;
      },
    });
  }

  save(): void {
    if (this.agent) {
      this.service.updateAgent(this.agent).subscribe();
    }
  }
}
