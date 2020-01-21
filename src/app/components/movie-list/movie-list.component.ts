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
  private data = {}
  movies$ : Observable<Movie[]>
  constructor(private movieService : MovieService) { }

  ngOnInit() {
    this.movies$ = this.movieService.getMovies()
  }

  logSelectionAndLikes(movie : Movie, like : boolean = false){
    if(this.data[movie.id] === undefined){
      this.data[movie.id] = [like ? 0 : 1, like ? 1 : 0]
    }else{
      if(like){
        this.data[movie.id][1]++;
      }else{
        this.data[movie.id][0]++;
      }
    }

    // console.log(this.data)
  }

}
