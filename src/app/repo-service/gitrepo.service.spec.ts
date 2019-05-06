import { TestBed } from '@angular/core/testing';

import { GitrepoService } from './gitrepo.service';

describe('GitrepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('GitService deveria ser criado ', () => {
     const service: GitrepoService = TestBed.get(GitrepoService);
     expect(service).toBeTruthy();
  });
});
