import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdolescenteFormComponent } from './adolescente-form.component';

describe('AdolescenteFormComponent', () => {
  let component: AdolescenteFormComponent;
  let fixture: ComponentFixture<AdolescenteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdolescenteFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdolescenteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
