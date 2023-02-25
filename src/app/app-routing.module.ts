import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnglishComponent } from './views/english/english.component';
import { GermanComponent } from './views/german/german.component';
import { HungarianComponent } from './views/hungarian/hungarian.component';
import { LanguagesComponent } from './views/languages/languages.component';
import { MainComponent } from './views/main/main.component';
import { EnglishUpdateComponent } from './views/update-view/english-update/english-update.component';
import { GermanUpdateComponent } from './views/update-view/german-update/german-update.component';
import { HungarianUpdateComponent } from './views/update-view/hungarian-update/hungarian-update.component';

const routes: Routes = [
  {path: "", component: MainComponent},
  {path: "languages", component: LanguagesComponent},
  {path: "languages/german", component: GermanComponent},
  {path: "languages/hungarian", component: HungarianComponent},
  {path: "languages/english", component: EnglishComponent},
  {path: "languages/german/update/:id", component: GermanUpdateComponent},
  {path: "languages/hungarian/update/:id", component: HungarianUpdateComponent},
  {path: "languages/english/update/:id", component: EnglishUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
