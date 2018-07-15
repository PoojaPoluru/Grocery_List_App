import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {MatToolbarModule,MatButtonModule,MatFormFieldModule, MatInputModule, MatListModule, MatCardModule, MatIconModule, MatTooltipModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppGroceryComponent } from './app-grocery/app-grocery.component';

@NgModule({
  declarations: [
    AppComponent,
    AppGroceryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatIconModule,
    
    FlexLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
