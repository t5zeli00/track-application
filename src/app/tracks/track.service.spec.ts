<<<<<<< HEAD
import { TestBed, inject  } from '@angular/core/testing';
=======
import { TestBed } from '@angular/core/testing';
>>>>>>> 90e2d0beb865a61f222af7fab414445eb370e72f

import { TrackService } from './track.service';

describe('TrackService', () => {
<<<<<<< HEAD
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrackService]
    });
  });

  it('should ...', inject([TrackService], (service: TrackService) => {
    expect(service).toBeTruthy();
  }));
=======
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrackService = TestBed.get(TrackService);
    expect(service).toBeTruthy();
  });
>>>>>>> 90e2d0beb865a61f222af7fab414445eb370e72f
});
