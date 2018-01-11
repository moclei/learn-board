import { Component, OnInit } from '@angular/core';
import {Decision} from '../decision/decision.model';
import {DecisionService} from "../decision/decision.service";

@Component({
  selector: 'app-decision-list',
  templateUrl: './decision-list.component.html',
  styleUrls: ['./decision-list.component.css']
})
export class DecisionListComponent implements OnInit {

  decisions: Decision[];
  constructor(private decisionService: DecisionService) { }

  ngOnInit() {
    this.decisions = this.decisionService.getDecisions();
  }

}
