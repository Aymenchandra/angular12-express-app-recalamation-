import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifTrashComponent } from './modif-trash.component';

describe('ModifTrashComponent', () => {
  let component: ModifTrashComponent;
  let fixture: ComponentFixture<ModifTrashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifTrashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifTrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
