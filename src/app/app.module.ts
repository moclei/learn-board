import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatSidenavModule, MatCardModule, MatButtonModule,
         MatSelectModule, MatFormFieldModule, MatInputModule, MatIconModule} from '@angular/material';
import { DecisionComponent } from './decision/decision.component';
import { UserComponent } from './user/user.component';
import { DecisionListComponent } from './decision-list/decision-list.component';
import { DecisionInputComponent } from './decision-input/decision-input.component';



@NgModule({
  declarations: [
    AppComponent,
    DecisionComponent,
    UserComponent,
    DecisionListComponent,
    DecisionInputComponent
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
    FormsModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
