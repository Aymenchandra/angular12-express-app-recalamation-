import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutTrashComponent } from './ajout-trash.component';

describe('AjoutTrashComponent', () => {
  let component: AjoutTrashComponent;
  let fixture: ComponentFixture<AjoutTrashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutTrashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutTrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
