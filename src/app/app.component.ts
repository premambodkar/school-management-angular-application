import { Component, VERSION } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',

    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'class',
        loadComponent: () =>
          import('./sclass/sclass.component').then((m) => m.SclassComponent),
      },
      {
        path: 'school',
        loadComponent: () =>
          import('./school/school.component').then((m) => m.SchoolComponent),
      },
      {
        path: 'marks',
        loadComponent: () =>
          import('./marks/marks.component').then((m) => m.MarksComponent),
      },
    ],
  },
];

@Component({
  selector: 'my-app',
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  standalone: true,
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
