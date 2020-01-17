import { Component, OnInit, HostListener } from '@angular/core';
import * as bookJson from './books.json';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['../../app.component.css']
})
export class BooksComponent implements OnInit {

  bookList = bookJson.books;
  genreList = ["Mystery", "Spy Fiction", "Non-Fiction", "Sci-Fi", "Novel", "Short Stories", "Fantasy"];
  filteredList = bookJson.books;
  showContent: boolean = false;
  filterBy = [];
  constructor() { }

  ngOnInit() {
  }
  openBookInfo() {

    if (this.showContent === true) {
      this.showContent = false;

    } else {
      this.showContent = true;
    }
  }
  getColor(genre){
    if (this.filterBy.indexOf(genre, 0) > -1) {
      return "4px solid lightslategray";
    }else{
      return "4px solid white";
    }
  }

  filterGenre(genrePicked) {
    // console.log(genrePicked);
    if (this.filterBy.indexOf(genrePicked, 0) > -1) {
      this.filterBy.splice(this.filterBy.indexOf(genrePicked, 0), 1);
    } else {
      this.filterBy.push(genrePicked);
    }
    if(this.filterBy.length < 1){
      this.filteredList = this.bookList;
    }else{
      this.filteredList = this.bookList.filter(d => d.genre === this.filterBy[0] ||  d.genre === this.filterBy[1]|| 
      d.genre === this.filterBy[2] || d.genre === this.filterBy[3] ||  d.genre === this.filterBy[4] 
      ||  d.genre === this.filterBy[5] ||  d.genre === this.filterBy[6]);
    }
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    // console.log(number);
    if (number >= 150) {
      document.getElementById("bookFilter").style.position = "fixed";
      document.getElementById("bookFilter").style.top = "130px";
      // document.getElementById("bookFilter").style.width = "230px";

    } else {
      document.getElementById("bookFilter").style.position = "absolute";
      document.getElementById("bookFilter").style.top = "";

      // document.getElementById("bookFilter").style.width = "230px";

    }

  }
}
