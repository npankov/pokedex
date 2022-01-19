import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillePageComponent } from './detaille-page.component';

describe('DetaillePageComponent', () => {
  let component: DetaillePageComponent;
  let fixture: ComponentFixture<DetaillePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaillePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaillePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
