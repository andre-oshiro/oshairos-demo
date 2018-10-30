import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sample3dComponent } from './sample3d.component';

describe('Sample3dComponent', () => {
  let component: Sample3dComponent;
  let fixture: ComponentFixture<Sample3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sample3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sample3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
