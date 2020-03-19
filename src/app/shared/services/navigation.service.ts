import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public static booksSearchUri = "/search";
  public static bookInfoUri = "/book";
  public static booksFavouritesUri = "/favourites";

  constructor(private router: Router) { }

  public openBooksSearch() {
    this.router.navigateByUrl(NavigationService.booksSearchUri);
  }

  public openBookInfo(id: number) {
    this.router.navigateByUrl(`${NavigationService.bookInfoUri}/${id}`);
  }

  public openFavouritesBooks() {
    this.router.navigateByUrl(NavigationService.booksFavouritesUri);
  }
}
