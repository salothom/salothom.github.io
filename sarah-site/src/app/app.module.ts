import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { BooksComponent } from './main/books/books.component';
import { MusicComponent } from './main/music/music.component';
import { HomeButtonsComponent } from './main/home/home-buttons/home-buttons.component';
import { ContactComponent } from './main/contact/contact.component';
import { TechComponent } from './main/tech/tech.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    HomeComponent,
    BooksComponent,
    MusicComponent,
    HomeButtonsComponent,
    ContactComponent,
    TechComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
