import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'
import { Movie } from '../models/movie';
import { Injectable } from '@angular/core';
@Injectable()
export class MovieService {
    private stats : {} = {}

    getStatsFor(id: number, like : boolean = false) : number {
      if(this.stats[id]){
        return like ? this.stats[id]['likes'] : this.stats[id]['views']
      } else {
        return 0
      }
    }

    logStats(id : number, like : boolean = false){
      if(this.stats[id] === undefined){
        this.stats[id] = { views: like ? 0 : 1, likes: like ? 1 : 0 }
      }else{
        if(like){
          this.stats[id]['likes']++;
        }else{
          this.stats[id]['views']++;
        }
      }
    }

    getMovie(id): Observable<Movie>{
      return this.getMovies().pipe(
        map(
          (movies: Movie[]) => movies.find(
            (movie : Movie) => movie.id === +id
          )
        )
      )
    }

    getMovies() : Observable<Movie[]> {
        return of(this.movies)
    }

    addMovie(movie : Movie) : Observable<Movie> {
      let maxId = 0;
      for(let m of this.movies){
        if(maxId < m.id) maxId = m.id
      }

      movie.id = maxId + 1
      this.movies.push(movie)
      return of(movie)
    }

    updateMovie(movie : Movie) : Observable<Movie> {
      for(let i in this.movies){
        if(this.movies[i].id === movie.id){
          this.movies[i] = movie
          break;
        }
      }

      return of(movie)
    }

    deleteMovie(movie : Movie) : Observable<Movie> {
      for(let i in this.movies){
        if(this.movies[i].id === movie.id){
          this.movies.splice(+i, 1)
          return of(movie);
        }
      }

      return of(null)
    }

    movies : Movie[] = [
      {
        "id": 102091,
        "title": "The Shawshank Redemption",
        "year": 1994,
        "rated": "R",
        "genre": "Crime, Drama",
        "plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        "poster": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "rating": 9.3,
        "votes": 1078045,
        "imdbID": "tt0111161",
        "reviews": []
      },
      {
        "id": 102092,
        "title": "The Godfather",
        "year": 1972,
        "rated": "R",
        "genre": "Crime, Drama",
        "plot": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        "poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
        "rating": 9.2,
        "votes": 762332,
        "imdbID": "tt0068646",
        "reviews": []
      },
      {
        "id": 102093,
        "title": "The Godfather: Part II",
        "year": 1974,
        "rated": "R",
        "genre": "Crime, Drama",
        "plot": "The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on his crime syndicate stretching from Lake Tahoe, Nevada to pre-revolution 1958 Cuba.",
        "poster": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
        "rating": 9.0,
        "votes": 496772,
        "imdbID": "tt0071562",
        "reviews": []
      },
      {
        "id": 102094,
        "title": "Pulp Fiction",
        "year": 1994,
        "rated": "R",
        "genre": "Crime, Drama, Thriller",
        "plot": "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        "poster": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR1,0,182,268_AL_.jpg",
        "rating": 9.0,
        "votes": 843376,
        "imdbID": "tt0110912",
        "reviews": []
      },
      {
        "id": 102095,
        "title": "The Good, the Bad and the Ugly",
        "year": 1966,
        "rated": "M",
        "genre": "Adventure, Western",
        "plot": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
        "poster": "https://m.media-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "rating": 9.0,
        "votes": 325579,
        "imdbID": "tt0060196",
        "reviews": []
      },
      {
        "id": 102096,
        "title": "The Dark Knight",
        "year": 2008,
        "rated": "PG-13",
        "genre": "Action, Crime, Drama, Thriller",
        "plot": "When Batman, Gordon and Harvey Dent launch an assault on the mob, they let the clown out of the box, the Joker, bent on turning Gotham on itself and bringing any heroes down to his level.",
        "poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "rating": 9.0,
        "votes": 1050810,
        "imdbID": "tt0468569",
        "reviews": []
      },
      {
        "id": 102097,
        "title": "12 Angry Men",
        "year": 1957,
        "rated": "Approved",
        "genre": "Drama",
        "plot": "A dissenting juror in a murder trial slowly manages to convince the others that the case is not as obviously clear as it seemed in court.",
        "poster": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "rating": 8.9,
        "votes": 266350,
        "imdbID": "tt0050083",
        "reviews": []
      },
      {
        "id": 102098,
        "title": "Schindler's List",
        "year": 1993,
        "rated": "R",
        "genre": "Biography, Drama, History, War",
        "plot": "In Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        "poster": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "rating": 8.9,
        "votes": 553804,
        "imdbID": "tt0108052",
        "reviews": []
      },
      {
        "id": 102099,
        "title": "The Lord of the Rings: The Return of the King",
        "year": 2003,
        "rated": "PG-13",
        "genre": "Action, Adventure, Fantasy",
        "plot": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        "poster": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "rating": 8.9,
        "votes": 767958,
        "imdbID": "tt0167260",
        "reviews": []
      },
      {
        "id": 102100,
        "title": "Fight Club",
        "year": 1999,
        "rated": "R",
        "genre": "Drama",
        "plot": "An insomniac office worker looking for a way to change his life crosses paths with a devil-may-care soap maker and they form an underground fight club that evolves into something much, much more...",
        "poster": "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "rating": 8.8,
        "votes": 819812,
        "imdbID": "tt0137523",
        "reviews": [] 
      }
    ]
}