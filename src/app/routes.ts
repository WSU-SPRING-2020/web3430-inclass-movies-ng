import { Routes } from '@angular/router'
import { MovieListComponent } from './components/movie-list/movie-list.component'
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component'
import { MovieFormComponent } from './components/movie-form/movie-form.component'

export const routes : Routes = [
  {path: 'movies', component: MovieListComponent},
  {path: 'movies/new', component: MovieFormComponent},
  {path: 'movies/:id', component: MovieDetailComponent},
  {path: 'movies/:id/edit', component: MovieFormComponent},
  {path: "", redirectTo: "movies", pathMatch: "full"}
]