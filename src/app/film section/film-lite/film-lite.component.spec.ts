import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmLiteComponent } from './film-lite.component';

describe('FilmLiteComponent', () => {
  let component: FilmLiteComponent;
  let fixture: ComponentFixture<FilmLiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmLiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmLiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
