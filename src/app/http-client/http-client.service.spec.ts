import { TestBed, inject } from '@angular/core/testing';

import { HttpClientService } from './http-client.service';
import { HttpClientModule } from '@angular/common/http';

describe('HttpClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClientService],
      imports:[HttpClientModule]
    });
  });

  it('should be created', inject([HttpClientService], (service: HttpClientService) => {
    expect(service).toBeTruthy();
  }));
});
