import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './blank/blank.component';
import { BooksComponent } from './books/books.component';
import { InvalidComponent } from './invalid/invalid.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  {path:'Technology',component:TechnologyComponent},
  {path:'',component:BlankComponent},
  {path:'Books',component:BooksComponent},
  {path:'**',component:InvalidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
