import { Component, OnInit, HostListener } from '@angular/core';
import * as musicJson from './music.json';
import { Router } from '@angular/router';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['../../app.component.css']
})

export class MusicComponent implements OnInit {

  constructor(private router: Router) { }
  decadesList: { [key: string]: string } = { "1960s": "4", "1970s": "58", "1980s": "27", "1990s": "202", "2000s": "110", "2010s": "6" };
  showContent: boolean = false;//"1950s": "113",  removing this for now?
  musicList = musicJson.albums;
  filteredMusicList = musicJson.albums;
  filterBy = [];

  ngOnInit() {
  }

  keySearch(event: any) {

    let keyLength = event.target.value.length;
    let wordSearch = event.target.value.toLowerCase()

    this.filteredMusicList = this.musicList.filter(d =>
      d.genre.substring(0, keyLength).toLowerCase() === wordSearch ||
      // d.secondaryGenre.substring(0, keyLength).toLowerCase() === wordSearch || 
      // can't do this right now becuase it isn't on every object?
      d.band.substring(0, keyLength).toLowerCase() === wordSearch ||
      d.album.substring(0, keyLength).toLowerCase() === wordSearch);


  }

  filterDown() {

  }

  openMusicInfo() {
    if (this.showContent === true) {
      this.showContent = false;
    } else {
      this.showContent = true;
    }
  }

  navigateToDecade(decade) {
    // console.log(decade);
    document.getElementById(decade).scrollIntoView();
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    // console.log(number);
    if (number >= 150) {
      document.getElementById("bookFilter").style.position = "fixed";
      document.getElementById("bookFilter").style.top = "130px";
    } else {
      document.getElementById("bookFilter").style.position = "absolute";
      document.getElementById("bookFilter").style.top = "";
    }
  }
}
