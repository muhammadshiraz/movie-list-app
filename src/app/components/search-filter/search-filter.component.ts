import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent {
  searchQuery: string = '';

  @Output() filterChanged = new EventEmitter<string>();

  applyFilter(): void {
    this.filterChanged.emit(this.searchQuery);
  }
}
