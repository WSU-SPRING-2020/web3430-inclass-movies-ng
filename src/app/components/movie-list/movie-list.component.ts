import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'movie-list-el',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  sortField : string = 'id'
  movies$ : Observable<Movie[]>
  constructor(private movieService : MovieService) { }

  ngOnInit() {
    this.movies$ = this.movieService.getMovies()
  }

  sortBy(field){
    this.sortField = field
  }

  sortMovies(movies : Movie[]){
    switch(this.sortField){
      case 'id':
        return movies.sort((a, b) => {return a.id - b.id})
      case 'title':
        return movies.sort(function(a, b){
          return a.title < b.title ? -1 : (a.title > b.title ? 1 : 0)
        })
    }
  }

  logSelectionAndLikes(movie : Movie, like : boolean = false){
    this.movieService.logStats(movie.id, like);
  }

}
