import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'movie-review-el',
  templateUrl: './movie-review.component.html',
  styleUrls: ['./movie-review.component.scss']
})
export class MovieReviewComponent implements OnInit {
  @Input() movie : Movie
  comment : string = ''

  constructor() { }

  ngOnInit() {
  }

  submitForm(f : NgForm) : void {
    if(f.valid){
      this.movie.reviews.push({
        comment: this.comment, postedAt: new Date()
      })

      f.resetForm()
    }
  }
}
