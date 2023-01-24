import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
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

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
