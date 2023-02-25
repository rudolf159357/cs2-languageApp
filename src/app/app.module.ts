import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms"

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
import { GermanUpdateComponent } from './views/update-view/german-update/german-update.component';
import { HungarianUpdateComponent } from './views/update-view/hungarian-update/hungarian-update.component';
import { EnglishUpdateComponent } from './views/update-view/english-update/english-update.component';

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
    TableComponent,
    GermanUpdateComponent,
    HungarianUpdateComponent,
    EnglishUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
