import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnglishComponent } from './views/english/english.component';
import { GermanComponent } from './views/german/german.component';
import { HungarianComponent } from './views/hungarian/hungarian.component';
import { LanguagesComponent } from './views/languages/languages.component';
import { MainComponent } from './views/main/main.component';

const routes: Routes = [
  {path: "", component: MainComponent},
  {path: "languages", component: LanguagesComponent},
  {path: "languages/german", component: GermanComponent},
  {path: "languages/hungarian", component: HungarianComponent},
  {path: "languages/english", component: EnglishComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
