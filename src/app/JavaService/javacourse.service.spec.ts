import { TestBed } from '@angular/core/testing';

import { JavacourseService } from './javacourse.service';

describe('JavacourseService', () => {
  let service: JavacourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JavacourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
