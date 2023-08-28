import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '@app/models/movie.model';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {
  @Input() movie: Movie | undefined;
  @Output() updateMovie = new EventEmitter<Movie>();
  @Output() deleteMovie = new EventEmitter<number>();

  isEditing = false;

  startEditing(): void {
    this.isEditing = true;
  }

  saveMovieChanges(): void {
    this.updateMovie.emit(this.movie);
    this.isEditing = false;
  }

  cancelEdit(): void {
    this.isEditing = false;
  }
}
