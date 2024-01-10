import { TestBed } from '@angular/core/testing';

import { NumberServService } from './number-serv.service';

describe('NumberServService', () => {
  let service: NumberServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
