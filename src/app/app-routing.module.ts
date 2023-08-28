import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from '@app/components/movie-list/movie-list.component';

const routes: Routes = [
  { path: '', component: MovieListComponent }, // Default route to MovieListComponent
  // Add more routes here if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
