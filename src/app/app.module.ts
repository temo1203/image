import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environment/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { TestComponent } from './route test/test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteOneComponent } from './route test/route-one/route-one.component';
import { RouteTwoComponent } from './route test/route-two/route-two.component';
import { HomeComponent } from './home/home.component';
import { FilmComponent } from './film section/film/film.component';
import { FilmLiteComponent } from './film section/film-lite/film-lite.component';
import { MaterialComponent } from './material/material.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { FormComponent } from './material/form/form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { NavigationMaterialComponent } from './material/navigation-material/navigation-material.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DashboardMaterialComponent } from './material/dashboard-material/dashboard-material.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { TreeMaterialComponent } from './material/tree-material/tree-material.component';
import { MatTreeModule } from '@angular/material/tree';
import { DragDropMaterialComponent } from './material/drag-drop-material/drag-drop-material.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ImagesComponent } from './images/images.component';
import { ImgRetriveComponent } from './img-retrive/img-retrive.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    RouteOneComponent,
    RouteTwoComponent,
    HomeComponent,
    FilmComponent,
    FilmLiteComponent,
    MaterialComponent,
    FormComponent,
    NavigationMaterialComponent,
    DashboardMaterialComponent,
    TreeMaterialComponent,
    DragDropMaterialComponent,
    ImagesComponent,
    ImgRetriveComponent,
  ],
  imports: [
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    MatTreeModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
