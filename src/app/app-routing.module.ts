import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NavigationService } from "@shared/";
import { AppComponent } from "./app.component";

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: NavigationService.booksSearchUri
      },
      {
        path: NavigationService.booksSearchUri,
        loadChildren: () => import('./modules/books-search/books-search.module').then(m => m.BooksSearchModule), 
      },
      {
        path: NavigationService.bookInfoUri,
        loadChildren: () => import('./modules/book-info/book-info.module').then(m => m.BookInfoModule), 
      },
      {
        path: NavigationService.booksFavouritesUri,
        loadChildren: () => import('./modules/favourites-books/favourites-books.module').then(m => m.FavouritesBooksModule), 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
