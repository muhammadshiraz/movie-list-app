import { Injectable } from '@angular/core';
import { Movie } from '@app/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private nextId = 0; // Initialize the counter
  private movies: Movie[] = [];

  constructor() { }

  getAllMovies(): Movie[] {
    if (this.movies.length === 0) {
      this.nextId = 0; // Reset the ID counter if there are no movies
    }
    return this.movies;
  }

  addMovie(movie: Movie): void {
    movie.id = this.nextId++; // Assign the next available ID
    this.movies.push(movie);
  }

  updateMovie(updatedMovie: Movie): void {
    const index = this.movies.findIndex(movie => movie.id === updatedMovie.id);
    if (index !== -1) {
      this.movies[index] = updatedMovie;
    }
  }

  deleteMovie(id: number): void {
    this.movies = this.movies.filter(movie => movie.id !== id);
  }
}
