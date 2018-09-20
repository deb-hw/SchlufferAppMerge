import { TestBed, inject } from '@angular/core/testing';

import { AvatarSubstringService } from './avatar-substring.service';

describe('AvatarSubstringService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AvatarSubstringService]
    });
  });

  it('should be created', inject([AvatarSubstringService], (service: AvatarSubstringService) => {
    expect(service).toBeTruthy();
  }));
});
