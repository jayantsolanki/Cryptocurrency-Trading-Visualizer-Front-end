/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WebsocketserveService } from './websocketserve.service';

describe('WebsocketserveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebsocketserveService]
    });
  });

  it('should ...', inject([WebsocketserveService], (service: WebsocketserveService) => {
    expect(service).toBeTruthy();
  }));
});
