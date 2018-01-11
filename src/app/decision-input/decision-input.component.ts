import { Component, OnInit } from '@angular/core';
import {DecisionService} from "../decision/decision.service";
import { Decision } from "../decision/decision.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-decision-input',
  templateUrl: './decision-input.component.html',
  styleUrls: ['./decision-input.component.css']
})
export class DecisionInputComponent implements OnInit {
  isFocused = false;
  // content: string;
  inputForm = new FormGroup ({
    content: new FormControl()
  });
  constructor(private decisionService: DecisionService) { }


  onFocus(){
    this.isFocused = true;
  }
  onBlur(){
    this.isFocused = false;
    const contentVal = this.inputForm.value.content;
    const isWhitespace = (contentVal || '').trim().length === 0;
    if(contentVal && !isWhitespace) {
      this.decisionService.addDecision(new Decision('marc', contentVal));
    }
    this.inputForm.reset();
  }
  onClick(){
    const contentVal = this.inputForm.value.content;
    const isWhitespace = (contentVal || '').trim().length === 0;
    if(contentVal && !isWhitespace) {
      this.decisionService.addDecision(new Decision('marc', contentVal));
    }
    this.inputForm.reset();
  }
  ngOnInit() {
  }

}
