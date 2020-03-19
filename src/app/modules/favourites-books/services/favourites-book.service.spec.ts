import { TestBed } from '@angular/core/testing';

import { FavouritesBookService } from './favourites-book.service';

describe('FavouritesBookService', () => {
  let service: FavouritesBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouritesBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
