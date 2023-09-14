import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdolescenteComponent } from './adolescente.component';

describe('AdolescenteComponent', () => {
  let component: AdolescenteComponent;
  let fixture: ComponentFixture<AdolescenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdolescenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdolescenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
