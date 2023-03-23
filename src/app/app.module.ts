import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AgentsComponent } from './agents/agents.component';
import { HttpClientModule } from '@angular/common/http';
import { AgentDetailComponent } from './agent-detail/agent-detail.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AgentSearchComponent } from './agent-search/agent-search.component';

@NgModule({
  declarations: [AppComponent, AgentsComponent, AgentDetailComponent, AgentSearchComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: AgentsComponent },
      { path: 'agents/:agentId', component: AgentDetailComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
