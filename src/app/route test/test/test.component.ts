import { Component, OnInit } from '@angular/core';
import {
  collection,
  addDoc,
  Firestore,
  doc,
  deleteDoc,
  collectionData,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  blog: any = '';
  password: any = '';
  name: any = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: any) => {
      this.blog = params.get('blog');
      this.password = params.get('password');
      this.name = params.get('name');
    });
    setTimeout(() => {
      console.log(this.blog, this.password, this.name);
    }, 3000);
  }
}
