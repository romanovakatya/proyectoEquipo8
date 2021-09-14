import { TestBed } from '@angular/core/testing';

import { EjemplaresPrestadoService } from './ejemplares-prestado.service';

describe('EjemplaresPrestadoService', () => {
  let service: EjemplaresPrestadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EjemplaresPrestadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
