import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-film-lite',
  templateUrl: './film-lite.component.html',
  styleUrls: ['./film-lite.component.css'],
})
export class FilmLiteComponent implements OnInit {
  ngOnInit(): void {}
  url: any = '';
  receivedName: any = '';
  receivedFilms: any = {};
  filmsString: any = {};
  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe((param) => {
      this.receivedName = param.get('name');
      this.filmsString = param.get('films');
      this.receivedFilms = JSON.parse(this.filmsString);
      // console.log(this.receivedFilms);
    });
  }
  FilmsAdder(value: any) {
    this.url = value;
    console.log(value);
    console.log('this.url =', this.url);
  }
  onVideoError(event: any) {
    console.log('error:', event);
  }
}
