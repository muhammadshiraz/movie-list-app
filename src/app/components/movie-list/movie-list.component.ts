import { Component, OnInit } from '@angular/core';
import { Movie } from '@app/models/movie.model';
import { MovieService } from '@app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  newMovie: Movie = { id: 0, title: '', director: '', releaseYear: 0 };

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies = this.movieService.getAllMovies();    
  }

  addMovie(): void {
    // Check if any of the required fields (title, director, releaseYear) are empty
    if (!this.newMovie.title || !this.newMovie.director || !this.newMovie.releaseYear) {
      // Display an error message or handle the validation error as needed
      alert('Please fill in all fields before adding the movie.');
      return; // Exit the function without adding the movie
    }
  
    // If all fields are filled, add the movie to the service
    this.movieService.addMovie({ ...this.newMovie, id: Date.now() });
  
    // Reset the form
    this.newMovie = { id: 0, title: '', director: '', releaseYear: 0 };
  }

  updateMovie(updatedMovie: Movie): void {
    this.movieService.updateMovie(updatedMovie);
  }

  deleteMovie(id: number): void {
    this.movies = this.movies.filter(movie => movie.id !== id);
    console.log(this.movies = this.movies.filter(movie => movie.id !== id));
  }
}
