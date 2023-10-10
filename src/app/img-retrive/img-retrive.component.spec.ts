import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgRetriveComponent } from './img-retrive.component';

describe('ImgRetriveComponent', () => {
  let component: ImgRetriveComponent;
  let fixture: ComponentFixture<ImgRetriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgRetriveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgRetriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
