import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashsComponent } from './trashs.component';

describe('TrashsComponent', () => {
  let component: TrashsComponent;
  let fixture: ComponentFixture<TrashsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrashsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
