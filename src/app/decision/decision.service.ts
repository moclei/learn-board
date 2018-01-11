import { Injectable, EventEmitter } from "@angular/core";
import { Decision } from "./decision.model";

@Injectable()
export class DecisionService {
  private decisions: Decision[] = [
    new Decision('Marc', 'Go to Fallon and Byrne to buy Christmas shopping', 'Christmas Shopping'),
    new Decision('Marc', 'Buy 2018 Tickets to Dublin now to save money, could be cheaper', 'Ireland Flights'),
    new Decision('Marc', 'Buy curtains for 30 apartments instead of installing cabinets', 'Curtains')
  ]
  decisionIsEdit = new EventEmitter<Decision>();

  constructor() {
  }

  addDecision(decision: Decision) {
    this.decisions.push(decision);
  }

  getDecisions() {
    return this.decisions;
  }

  editDecision(decision: Decision) {
    this.decisionIsEdit.emit(decision);
  }

  updateDecision(decision: Decision) {
  }

  deleteDecision(decision: Decision) {
    this.decisions.splice(this.decisions.indexOf(decision), 1);
  }
}
