// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule

import { AppComponent } from './app.component';
import { MovieListComponent } from '@app/components/movie-list/movie-list.component';
import { MovieItemComponent } from '@app/components/movie-item/movie-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, // Include AppRoutingModule in imports
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
