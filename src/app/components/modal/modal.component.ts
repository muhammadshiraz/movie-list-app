import { Component, Input, Output, EventEmitter } from '@angular/core';

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

  closeModal(): void {
    this.closeModalEvent.emit(true);
  }
}
