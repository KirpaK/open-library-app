import { Injectable, OnDestroy } from "@angular/core";
import { OpenLibraryService, untilDestroyed } from "@shared/";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BooksSearchService implements OnDestroy {
  private _lastQuery: string;
  private _books$ = new BehaviorSubject([]);
  public get books$() {
    return this._books$.asObservable();
  }

  constructor(private openLibrary: OpenLibraryService) {
    this.openLibrary.books$
      .pipe(untilDestroyed(BooksSearchService))
      .subscribe(response => {
        this._books$.next([]);
      });
  }

  search(query: string) {
    this._lastQuery = query;
    this.openLibrary.searchBooks(query);
  }

  changePageLimit(pageLimit: number) {
    this.openLibrary.pageLimit = pageLimit;
    this.openLibrary.searchBooks(this._lastQuery);
  }

  ngOnDestroy() {}
}
