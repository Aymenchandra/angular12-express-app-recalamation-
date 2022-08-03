import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifEmployeComponent } from './modif-employe.component';

describe('ModifEmployeComponent', () => {
  let component: ModifEmployeComponent;
  let fixture: ComponentFixture<ModifEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifEmployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
