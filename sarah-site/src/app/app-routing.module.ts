import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { MusicComponent } from './main/music/music.component';
import { BooksComponent } from './main/books/books.component';
import { ContactComponent } from './main/contact/contact.component';
import { TechComponent } from './main/tech/tech.component';

const routes: Routes = [
  {path: "", component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'music', component: MusicComponent },
  { path: 'books', component: BooksComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'tech', component: TechComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }