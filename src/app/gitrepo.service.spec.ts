import { TestBed } from '@angular/core/testing';

import { GitrepoService } from './gitrepo.service';

describe('GitrepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitrepoService = TestBed.get(GitrepoService);
    expect(service).toBeTruthy();
  });
});
