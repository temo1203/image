import { Component } from '@angular/core';
@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
})
export class FilmComponent {
  constructor() {}
  filmData: Array<any> = [
    {
      name: 'spiderman',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus rerum amet atque impedit voluptatibus, reiciendis quaerat? Aut veritatisadipisci temporibus nisi ducimus esse hic, quod culpa aliquid voluptate necessitatibus!',
      series: {
        first: 'https://www.w3schools.com/html/mov_bbb.mp4',
        second: 'https://www.w3schools.com/html/mov_bbb.mp4',
        third: 'https://www.w3schools.com/html/mov_bbb.mp4',
        fourth: '../.././assets/pexels-tima-miroshnichenko-5377521 (2160p).mp4',
        fifth: 'https://www.w3schools.com/html/mov_bbb.mp4',
        sixth: 'https://www.w3schools.com/html/mov_bbb.mp4',
        seventh: 'https://www.w3schools.com/html/mov_bbb.mp4',
        eighth: 'https://www.w3schools.com/html/mov_bbb.mp4',
        ninth: 'https://www.w3schools.com/html/mov_bbb.mp4',
        tenth: 'https://www.w3schools.com/html/mov_bbb.mp4',
      },
    },
    {
      name: 'Captain America',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus rerum amet atque impedit voluptatibus, reiciendis quaerat? Aut veritatisadipisci temporibus nisi ducimus esse hic, quod culpa aliquid voluptate necessitatibus!',
      series: {
        first: '../../assets/pexels-tima-miroshnichenko-5377685 (2160p).mp4',
        second: '../../assets/pexels-tima-miroshnichenko-5377685 (2160p).mp4',
        third: '../../assets/pexels-tima-miroshnichenko-5377685 (2160p).mp4',
        fourth: '../../assets/pexels-tima-miroshnichenko-5377685 (2160p).mp4',
        fifth: '../../assets/pexels-tima-miroshnichenko-5377685 (2160p).mp4',
        sixth: '../../assets/pexels-tima-miroshnichenko-5377685 (2160p).mp4',
        seventh: '../../assets/pexels-tima-miroshnichenko-5377647 (2160p).mp4',
        eighth: '../../assets/pexels-tima-miroshnichenko-5377685 (2160p).mp4',
        ninth: '../../assets/pexels-tima-miroshnichenko-5377685 (2160p).mp4',
        tenth: '../../assets/pexels-tima-miroshnichenko-5377685 (2160p).mp4',
      },
    },
  ];
}
