import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'movie-list-item-el',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.scss']
})
export class MovieListItemComponent implements OnInit {

  @Input() movie : Movie
  @Output() select = new EventEmitter<Movie>();
  constructor(private movieService : MovieService) { }

  ngOnInit() {
  }

  get views() : number {
    return this.movieService.getStatsFor(this.movie.id)
  }

  get likes() : number {
    return this.movieService.getStatsFor(this.movie.id, true)
  }
}
