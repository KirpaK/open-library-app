import { Injectable, OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject, Observable } from "rxjs";
import {
  SettingsService,
  BooksResponse,
  BookResponse,
  untilDestroyed
} from "..";

@Injectable({
  providedIn: "root"
})
export class OpenLibraryService implements OnDestroy {
  public pageLimit: number;
  private baseUrl: string;
  private _books$ = new Subject<BooksResponse>();

  public get books$() {
    return this._books$.asObservable();
  }

  constructor(
    private http: HttpClient,
    private settingsService: SettingsService
  ) {
    this.baseUrl = this.settingsService.endpointOpenLibrary;
    this.pageLimit = this.settingsService.defaultPageLimite;
  }

  public searchBooks(query: string, offset: number = 0, limit?: number) {
    const q = encodeURIComponent(query);
    const params = `${q}&offset=${offset}&limit=${limit || this.pageLimit}`;
    const url = `${this.baseUrl}/search.json?${params}`;

    const request = this.http.get<BooksResponse>(url);
    request.pipe(untilDestroyed(OpenLibraryService)).subscribe(this._books$);
    return this.books$;
  }

  public loadBook(query: string): Observable<BookResponse> {
    return null;
  }

  ngOnDestroy() {}
}
