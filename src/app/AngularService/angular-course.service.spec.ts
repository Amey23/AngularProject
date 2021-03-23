import { TestBed } from '@angular/core/testing';

import { AngularCourseService } from './angular-course.service';

describe('AngularCourseService', () => {
  let service: AngularCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
