import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './views/main/main.component';
import { ContentBoxComponent } from './components/content-box/content-box.component';
import { LanguagesComponent } from './views/languages/languages.component';
import { CountryBoxComponent } from './components/country-box/country-box.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    ContentBoxComponent,
    LanguagesComponent,
    CountryBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
