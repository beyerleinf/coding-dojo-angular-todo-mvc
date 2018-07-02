import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent, InputComponent, TodoListComponent} from './components';
import {MaterialModule} from './modules';

@NgModule({
  declarations: [AppComponent, TodoListComponent, TodoListComponent, InputComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, MaterialModule, BrowserAnimationsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
