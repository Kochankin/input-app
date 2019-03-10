import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';

import { AppComponent } from './app.component';
import { InputComponentComponent } from './input-component/input-component.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputRangeComponent } from './input-range/input-range.component';
import { InputDateComponent } from './input-date/input-date.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponentComponent,
    InputTextComponent,
    InputNumberComponent,
    InputRangeComponent,
    InputDateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
