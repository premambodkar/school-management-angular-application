import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'school',
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
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
