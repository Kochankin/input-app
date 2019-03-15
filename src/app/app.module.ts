import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';

import { AppComponent } from './app.component';
import { InputComponentComponent } from './input-component/input-component.component';
import { PlaceholderDirective } from './placeholder.directive';
import { ValidationDirective } from './validation.directive';

@NgModule({
  declarations: [
    AppComponent,
    InputComponentComponent,
    PlaceholderDirective,
    ValidationDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
