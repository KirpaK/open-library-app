import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksSearchComponent } from './books-search.component';

const routes: Routes = [
  {
    path: '',
    component: BooksSearchComponent,
    // children: [
    //   {
    //     path: '',
    //     pathMatch: 'full',
    //     redirectTo: 'search',
    //   },
    //   {
    //     path: 'search/:id',
    //     component: SystemSettingsComponent,
    //   },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksSearchRoutingModule {}
