import { TestBed } from '@angular/core/testing';

import { FileParser } from './file-parser.service';

describe('FileParser', () => {
  let service: FileParser;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileParser);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
