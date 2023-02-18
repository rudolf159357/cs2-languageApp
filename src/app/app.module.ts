import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './views/main/main.component';
import { ContentBoxComponent } from './components/content-box/content-box.component';
import { LanguagesComponent } from './views/languages/languages.component';
import { CountryBoxComponent } from './components/country-box/country-box.component';
import { GermanComponent } from './views/german/german.component';
import { HungarianComponent } from './views/hungarian/hungarian.component';
import { EnglishComponent } from './views/english/english.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    ContentBoxComponent,
    LanguagesComponent,
    CountryBoxComponent,
    GermanComponent,
    HungarianComponent,
    EnglishComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
