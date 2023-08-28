import { Component, OnInit, ViewChild } from '@angular/core';
import { Movie } from '@app/models/movie.model';
import { MovieService } from '@app/services/movie.service';
import { MovieFilterComponent } from '@app/components//movie-filter/movie-filter.component'; // Import the filter component
import { AppConstants } from '@app/app-constants'; // Adjust the import path as needed

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  newMovie: Movie = { id: 0, title: '', director: '', releaseYear: 0 };
  searchQuery: string = ''; // Define the searchQuery property
  filters: any = {}; // Declare filters as an object
  // Define the imageSrc property
  imageSrc: string;
  modalTitle: string = 'Validation Error';
  modalMessage: string = 'Please fill in all fields before adding the movie.';
  showModal: boolean = false;

  constructor(private movieService: MovieService) {
    this.imageSrc = AppConstants.imagePath.icons.movieTicket;
  }

  @ViewChild(MovieFilterComponent) filterComponent!: MovieFilterComponent; // ViewChild for the filter component

  ngOnInit(): void {
    // Call a method to add dummy data when the component is initialized
    this.addDummyData();
    this.loadMovies(); // Load movies initially
  }

  private loadMovies(): void {
    this.movies = this.movieService.getAllMovies();
  }

  onFilterSearched(searchQuery: string): void {
    this.searchQuery = searchQuery;
  
    if (!this.searchQuery) {
      // If the search query is empty, show all movies
      this.loadMovies();
    } else {
      // Filter movies based on the search query
      this.movies = this.movies.filter(movie =>
        movie.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        movie.director.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

  onFilterChanged(filters: any): void {
    this.filters = filters;
    // Apply the selected filter criteria to your movies list
    this.loadMovies(); // Load movies from the service

    if (this.filters.releaseYear) {
      this.movies = this.movies.filter(
        movie => movie.releaseYear === parseInt(this.filters.releaseYear, 10)
      );
    }
    // Apply more filter criteria as needed
  }

  addMovie(): void {
    // Check if any of the required fields (title, director, releaseYear) are empty
    if (!this.newMovie.title || !this.newMovie.director || !this.newMovie.releaseYear) {
      // Display an error message or handle the validation error as needed
      this.showModal = true;      
      return; // Exit the function without adding the movie
    }
  
    // If all fields are filled, add the movie to the service
    this.movieService.addMovie({ ...this.newMovie, id: Date.now() });
  
    // Reload the movies list after adding a movie
    this.loadMovies();
  
    // Reset the form
    this.newMovie = { id: 0, title: '', director: '', releaseYear: 0 };

    // Trigger the filter update by emitting an event from the filter component
    this.filterComponent.applyFilter();    
  }

  updateMovie(updatedMovie: Movie): void {
    this.movieService.updateMovie(updatedMovie);
  }

  deleteMovie(id: number): void {
    this.movieService.deleteMovie(id);

    // Reload the movies list after deleting a movie
    this.loadMovies();
  }

  addDummyData(): void {
    // Create some dummy movie objects
    const dummyMovies: Movie[] = [
      { id: 1, title: 'The Tailor', director: 'Cem Karcı', releaseYear: 2023 },
      { id: 2, title: 'Kara Para Aşk', director: 'Ahmet Katıksız', releaseYear: 2014 },
      { id: 3, title: 'The Protector', director: 'Umut Aral Gönenç', releaseYear: 2018 },
      { id: 4, title: 'Kördügüm', director: 'Yildiz Tunc', releaseYear: 2016 },      
      // Add more dummy movies as needed
    ];

    // Add each dummy movie to the service
    dummyMovies.forEach(movie => {
      this.movieService.addMovie(movie);
    });
  }

  // Function to open the modal with custom title and message
  openModal(title: string, message: string): void {
    this.modalTitle = title;
    this.modalMessage = message;
    this.showModal = true;
  }
  // Function to close the modal
  closeModal(): void {
    this.showModal = false;
  }
}
