import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { MovieService } from '@app/services/movie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.scss']
})
export class MovieFilterComponent implements OnInit {
  selectedReleaseYear: string = ''; // Define the selectedReleaseYear property
  releaseYears: string[] = []; // Define an array to hold release years

  @Output() filterChanged = new EventEmitter<any>();
  private movieAddedSubscription!: Subscription;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    // Initialize the release years when the component is initialized
    this.initReleaseYears();

    // Subscribe to the movieAdded event
    this.movieAddedSubscription = this.movieService.movieAdded.subscribe(() => {
      this.initReleaseYears(); // Update release years when a movie is added
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from the movieAdded event when the component is destroyed
    this.movieAddedSubscription.unsubscribe();
  }

  private initReleaseYears(): void {
    // Get all movies from the service
    const movies = this.movieService.getAllMovies();

    // Extract unique release years from the movies
    const uniqueReleaseYears = Array.from(new Set(movies.map(movie => movie.releaseYear.toString())));

    // Sort the release years in descending order
    this.releaseYears = uniqueReleaseYears.sort((a, b) => parseInt(b, 10) - parseInt(a, 10));
  }

  applyFilter(): void {
    const filters = {
      releaseYear: this.selectedReleaseYear, // Include releaseYear in the filters
    };
    this.filterChanged.emit(filters);
  }
}
