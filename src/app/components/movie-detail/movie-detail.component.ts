import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  isToConfirmDelete : boolean = false
  movie$ : Observable<Movie>
  constructor(private movieService : MovieService,
    private route : ActivatedRoute,
    private toastr : ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.movie$ = this.movieService.getMovie(this.route.snapshot.params['id'])
  }

  toggleConfirmDelete() : void {
    this.isToConfirmDelete = !this.isToConfirmDelete
  }

  deleteMovie(movie : Movie): void {
    this.movieService.deleteMovie(movie).subscribe(data => {
      this.toastr.success("Movie delete succesfully")
      this.router.navigate(['/movies'])
    })
  }

}
