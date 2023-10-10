import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteOneComponent } from './route test/route-one/route-one.component';
import { RouteTwoComponent } from './route test/route-two/route-two.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './route test/test/test.component';
import { FilmComponent } from './film section/film/film.component';
import { FilmLiteComponent } from './film section/film-lite/film-lite.component';
import { MaterialComponent } from './material/material.component';
import { FormComponent } from './material/form/form.component';
import { NavigationMaterialComponent } from './material/navigation-material/navigation-material.component';
import { TreeMaterialComponent } from './material/tree-material/tree-material.component';
import { DragDropMaterialComponent } from './material/drag-drop-material/drag-drop-material.component';
import { DashboardMaterialComponent } from './material/dashboard-material/dashboard-material.component';
import { ImagesComponent } from './images/images.component';
import { ImgRetriveComponent } from './img-retrive/img-retrive.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'retriever', component: ImgRetriveComponent },
  { path: 'img', component: ImagesComponent },
  { path: 'one', component: RouteOneComponent },
  { path: 'two', component: RouteTwoComponent },
  { path: 'test', component: TestComponent },
  { path: 'film', component: FilmComponent },
  { path: 'film-lite', component: FilmLiteComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'form-material', component: FormComponent },
  { path: 'navigation-material', component: NavigationMaterialComponent },
  { path: 'tree-material', component: TreeMaterialComponent },
  { path: 'drag-drop-material', component: DragDropMaterialComponent },
  { path: 'dashboard-material', component: DashboardMaterialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
