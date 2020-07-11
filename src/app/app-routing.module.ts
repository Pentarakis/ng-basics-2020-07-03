import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./basic-layout/dashboard/dashboard.component";
import {BookListComponent} from "./book/book-list/book-list.component";


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'book',
    component: BookListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
