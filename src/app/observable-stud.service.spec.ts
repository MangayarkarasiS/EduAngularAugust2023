import { TestBed } from '@angular/core/testing';

import { ObservableStudService } from './observable-stud.service';

describe('ObservableStudService', () => {
  let service: ObservableStudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservableStudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
