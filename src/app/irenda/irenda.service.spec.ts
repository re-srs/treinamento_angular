import { TestBed, inject } from '@angular/core/testing';

import { IrendaService } from './irenda.service';

describe('IrendaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IrendaService]
    });
  });

  it('should be created', inject([IrendaService], (service: IrendaService) => {
    expect(service).toBeTruthy();
  }));
});
