import { Injectable } from '@angular/core';
import { Movie } from '@app/models/movie.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [];
  private nextId = 1; // Start with ID 1
  movieAdded = new Subject<void>(); // Create a subject to notify when a movie is added

  constructor() { }

  getAllMovies(): Movie[] {
    return this.movies;
  }

  addMovie(movie: Movie): void {
    movie.id = this.nextId++;
    this.movies.push(movie);

    // Notify that a movie has been added
    this.movieAdded.next();
  }

  updateMovie(updatedMovie: Movie): void {
    const index = this.movies.findIndex(movie => movie.id === updatedMovie.id);
    if (index !== -1) {
      this.movies[index] = updatedMovie;
    }
  }

  deleteMovie(id: number): void {
    this.movies = this.movies.filter(movie => movie.id !== id);
    if (this.movies.length === 0) {
      // If all movies are deleted, reset the nextId counter
      this.nextId = 1;
    }
  }
}
