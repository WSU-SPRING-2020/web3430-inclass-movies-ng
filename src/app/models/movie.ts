import { Review } from './review'

export class Movie {
    id : number
    title : string
    year : number
    rated :string
    genre : string
    plot : string
    poster : string
    rating : number
    votes : number
    imdbID : string
    reviews?: Review[]
}