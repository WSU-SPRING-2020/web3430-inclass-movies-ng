import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie$ : Observable<Movie>
  constructor(private movieService : MovieService,
    private route : ActivatedRoute) { }

  ngOnInit() {
    this.movie$ = this.movieService.getMovie(this.route.snapshot.params['id'])
  }

}
