import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookEditComponent } from './book-edit/book-edit.component';

const routes: Routes = [
  {
    path: 'books',
    component: BookComponent,
    data: {title: 'Book List'}
  },
  {
    path: 'book-detail/:id',
    component: BookDetailComponent,
    data: {title: 'Book Detail'}
  },
  {
    path: 'book-add',
    component: BookAddComponent,
    data: {title: 'Book Add'}
  },
  {
    path: 'book-edit/:id',
    component: BookEditComponent,
    data: {title: 'Book Edit'}
  },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
