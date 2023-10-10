import { Component } from '@angular/core';
import {
  Firestore,
  addDoc,
  doc,
  deleteDoc,
  collection,
  collectionData,
} from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { noCap } from '../../Validators/firstLetter.validators';
import { noSpace } from '../../Validators/nospace.validators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-route-two',
  templateUrl: './route-two.component.html',
  styleUrls: ['./route-two.component.css'],
})
export class RouteTwoComponent {
  allSites!: Observable<Array<any>>;
  form: any;
  SiteId!: 1;
  Name: any = '';
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private afs: Firestore
  ) {
    this.allSites = this.ShowData();
    this.route.queryParams.subscribe((params) => {
      this.Name = params['val'];
      console.log(this.Name);
    });
    this.form = fb.group({
      textarea: ['', [Validators.required, Validators.minLength(15)]],
      name: ['', Validators.required],
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength,
          noCap,
          noSpace,
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(25),
          noSpace,
        ],
      ],
    });
  }
  test(first: any, second: any) {
    console.log(first, second);
  }
  Submit() {
    console.log('gamarjoba zurab');

    let col = collection(this.afs, 'Tester-value-2');
    let user = {
      name: this.fc.name.value,
      username: this.fc.username.value,
      password: this.fc.password.value,
      textarea: this.fc.textarea.value,
    };
    addDoc(col, user);
  }
  ShowData() {
    let col = collection(this.afs, 'Tester-value-2');
    return collectionData(col, { idField: 'id' });
  }
  del(id: any) {
    let col = doc(this.afs, 'Tester-value-2', id);
    return deleteDoc(col);
  }
  get fc() {
    return this.form.controls;
  }
  search(val: any) {
    console.log(val);
  }
}
