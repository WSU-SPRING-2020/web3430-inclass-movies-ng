import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {
  movieForm : FormGroup
  isEdit : boolean
  constructor(private route : ActivatedRoute,
    private movieService : MovieService,
    private fb : FormBuilder) { }

  ngOnInit() {
    this.movieForm = this.fb.group({
      id: [null],
      title: [null, Validators.required],
      year: [2020, [Validators.required, Validators.min(1900), Validators.max(2020)]],
    })
  }

}
