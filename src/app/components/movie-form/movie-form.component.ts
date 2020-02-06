import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Movie } from 'src/app/models/movie';
import { ToastrService } from 'ngx-toastr';
import {rangeValidator} from '../../validators/rage.validator'

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
    private fb : FormBuilder,
    private router : Router,
    private toastr : ToastrService) { }

  ngOnInit() {
    this.movieForm = this.fb.group({
      id: [null],
      title: [null, Validators.required],
      year: [2020, [Validators.required, Validators.min(1900), Validators.max(2020)]],
      rated: [null, Validators.required],
      genre: [null, Validators.required],
      plot: [null, Validators.required],
      poster: [null, [Validators.required, Validators.pattern(/https?:\/\/.+(svg|jpg|png|gif)/)]],
      rating: [0.0, [Validators.pattern(/^1?\d(\.\d\d?)?$/), rangeValidator(0, 10)]],
      votes: [0, Validators.pattern(/^\d+$/)],
      imdbID: [null, Validators.required]
    })

    this.isEdit = !!this.route.snapshot.params['id']
    if(this.isEdit){
      this.movieService.getMovie(this.route.snapshot.params['id']).subscribe(
        m => this.movieForm.patchValue(m)
      )
    }
  }




  submitForm(f : NgForm){
    console.log("submitted")
    if(f.valid){
      console.log("submitted 1")

      const movie : Movie = Object.assign({}, this.movieForm.value)
      if(this.isEdit){
        this.movieService.updateMovie(movie).subscribe(data => {
          this.toastr.success("Movie updated successfully")
          this.router.navigate([`/movies/${movie.id}`])
        })
      }else{
        console.log("submitted 2")
        this.movieService.addMovie(movie).subscribe(data => {
          this.toastr.success("Movie added successfully")
          this.router.navigate(['/movies'])
        })
      }
    } else {
      console.log(f.errors)
      console.log(this.imdbID.errors)
      console.log(this.title.errors)  
      console.log(this.year.errors)
      console.log(this.poster.errors)
      console.log(this.plot.errors)
      console.log(this.rated.errors)  
      console.log(this.rating.errors)
      console.log(this.genre.errors)
      console.log(this.votes.errors)
    }
  }

  get title() { return this.movieForm.get('title') }
  get year() { return this.movieForm.get('year') }
  get rated() { return this.movieForm.get('rated') }
  get genre() { return this.movieForm.get('genre') }
  get plot() { return this.movieForm.get('plot') }
  get poster() { return this.movieForm.get('poster') }
  get rating() { return this.movieForm.get('rating') }
  get votes() { return this.movieForm.get('votes') }
  get imdbID() { return this.movieForm.get('imdbID') }
}
