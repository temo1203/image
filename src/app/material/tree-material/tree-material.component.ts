import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-material',
  templateUrl: './tree-material.component.html',
  styleUrls: ['./tree-material.component.css'],
})
export class TreeMaterialComponent implements OnInit {
  loading: boolean = false;
  ngOnInit(): void {
    setTimeout(() => {
      this.loading = true;
    }, 2000);
  }
}
