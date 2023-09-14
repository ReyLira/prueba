import { TestBed } from '@angular/core/testing';

import { AdolescenteService } from './adolescente.service';

describe('AdolescenteService', () => {
  let service: AdolescenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdolescenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
