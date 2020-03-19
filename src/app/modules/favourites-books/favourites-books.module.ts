import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouritesBooksRoutingModule } from './favourites-books-routing.module';
import { FavouritesBooksComponent } from './favourites-books.component';


@NgModule({
  declarations: [FavouritesBooksComponent],
  imports: [
    CommonModule,
    FavouritesBooksRoutingModule
  ]
})
export class FavouritesBooksModule { }
