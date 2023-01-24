import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-app',
  imports: [FormsModule, CommonModule, HttpClientModule, RouterModule],
  templateUrl: './app.component.html',
  standalone: true,
})
export class AppComponent {}
