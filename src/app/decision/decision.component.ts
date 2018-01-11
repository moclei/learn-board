import { Component, OnInit, Input, Inject } from '@angular/core';
import { Decision } from './decision.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.css']
})
export class DecisionComponent implements OnInit {
  @Input() decision: Decision;
  mouseEnter = false;

  constructor(public dialog: MatDialog) { }

  openDialog(decision): void {
    console.log('openDialog(decision), decision: ' + decision + ', title: ' + decision.title);
    const dialogPos = {top: '10em'};

    const dialogRef = this.dialog.open(DecisionDialogComponent, {
      width: '60em',
      data: decision,
      position: dialogPos
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
  }
  onMouseEnter(){
    this.mouseEnter = true;
  }
  onMouseLeave(){
    this.mouseEnter = false;
  }
}

@Component({
  selector: 'app-decision-dialog',
  templateUrl: 'decision-dialog.component.html',
  styleUrls: ['./decision.component.css']
})
export class DecisionDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DecisionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

