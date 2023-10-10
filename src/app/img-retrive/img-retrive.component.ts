import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  deleteDoc,
} from '@angular/fire/firestore';

@Component({
  selector: 'app-img-retrive',
  templateUrl: './img-retrive.component.html',
  styleUrls: ['./img-retrive.component.css'],
})
export class ImgRetriveComponent {
  allSites!: Observable<Array<any>>;
  constructor(private afs: Firestore) {
    this.allSites = this.ShowData();
  }
  ShowData() {
    let col = collection(this.afs, 'images');
    return collectionData(col, { idField: 'id' });
  }
  del(id: any) {
    let col = doc(this.afs, 'images', id);
    return deleteDoc(col);
  }
}
