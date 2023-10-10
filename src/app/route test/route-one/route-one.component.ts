import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-route-one',
  templateUrl: './route-one.component.html',
  styleUrls: ['./route-one.component.css'],
})
export class RouteOneComponent {
  constructor(private router: Router) {}
  clicker(value: any) {
    console.log(value);
    this.router.navigate(['/two'], { queryParams: { val: value } });
  }
  onKeyup(val: any) {
    console.log(val);
  }
}
