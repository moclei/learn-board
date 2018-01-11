import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatSidenavModule, MatCardModule, MatButtonModule,
         MatSelectModule, MatFormFieldModule, MatInputModule, MatIconModule,
        MatDialogModule } from '@angular/material';
import { DecisionComponent, DecisionDialogComponent } from './decision/decision.component';
import { UserComponent } from './user/user.component';
import { DecisionListComponent } from './decision-list/decision-list.component';
import { DecisionInputComponent } from './decision-input/decision-input.component';
import { AutofocusDirective } from './autofocus.directive';
import { ElasticModule } from 'angular2-elastic';
import {DecisionService} from "./decision/decision.service";


@NgModule({
  declarations: [
    AppComponent,
    DecisionComponent,
    UserComponent,
    DecisionListComponent,
    DecisionInputComponent,
    DecisionDialogComponent,
    AutofocusDirective
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    ElasticModule
  ],
  providers: [DecisionService],
  entryComponents: [
    DecisionDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
