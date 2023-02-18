import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguagesComponent } from './views/languages/languages.component';
import { MainComponent } from './views/main/main.component';

const routes: Routes = [
  {path: "", component: MainComponent},
  {path: "languages", component: LanguagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
