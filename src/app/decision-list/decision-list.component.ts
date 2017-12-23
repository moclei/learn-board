import { Component, OnInit } from '@angular/core';
import {Decision} from '../decision/decision.model';

@Component({
  selector: 'app-decision-list',
  templateUrl: './decision-list.component.html',
  styleUrls: ['./decision-list.component.css']
})
export class DecisionListComponent implements OnInit {

  decisions: Decision[] = [
    new Decision('Marc', 'Go to Fallon and Byrne to buy Christmas shopping', 'Christmas Shopping'),
    new Decision('Marc', 'Buy 2018 Tickets to Dublin now to save money, could be cheaper', 'Ireland Flights'),
    new Decision('Marc', 'Buy curtains for 30 apartments instead of installing cabinets', 'Curtains')
  ]
  constructor() { }

  ngOnInit() {
  }

}
