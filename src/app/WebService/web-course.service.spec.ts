import { TestBed } from '@angular/core/testing';

import { WebCourseService } from './web-course.service';

describe('WebCourseService', () => {
  let service: WebCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
