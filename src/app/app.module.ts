import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCheckboxModule } from '@angular/material/checkbox';

import { ReactiveFormsModule }   from '@angular/forms';

@NgModule({
    imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MatCheckboxModule, ReactiveFormsModule],
    declarations: [ AppComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
