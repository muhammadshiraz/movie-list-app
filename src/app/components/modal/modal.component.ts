import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppConstants } from '@app/app-constants'; // Adjust the import path as needed

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() modalTitle: string = ''; // Initialize with an empty string
  @Input() modalMessage: string = ''; // Initialize with an empty string
  @Input() error: boolean = false; // Add an error flag to determine if it's an error modal
  @Output() closeModalEvent = new EventEmitter<boolean>();
  // Define the imageSrc property
  imageSrc: string;

  constructor() {
    this.imageSrc = AppConstants.imagePath.icons.angleTriangle;
  }

  closeModal(): void {
    this.closeModalEvent.emit(true);
  }
}
