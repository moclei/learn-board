import { Component, OnInit, Input } from '@angular/core';
import {Decision} from './decision.model';

@Component({
  selector: 'app-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.css']
})
export class DecisionComponent implements OnInit {
  @Input() decision: Decision;

  constructor() { }

  ngOnInit() {
  }

}
