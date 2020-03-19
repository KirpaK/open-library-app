import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { environment } from "../environments/environment";
import {
  SETTINGS,
  SettingsService,
  NavigationService,
  OpenLibraryService
} from "./shared";
import { BooksSearchModule } from "./modules/books-search/books-search.module";
import { BookInfoModule } from "./modules/book-info/book-info.module";
import { FavouritesBooksModule } from "./modules/favourites-books/favourites-books.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BooksSearchModule,
    BookInfoModule,
    FavouritesBooksModule
  ],
  providers: [
    { provide: SETTINGS, useValue: environment },
    SettingsService,
    OpenLibraryService,
    NavigationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
