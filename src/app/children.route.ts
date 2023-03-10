import { Routes } from '@angular/router';

export const routes: Routes = [
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
        loadChildren: () =>
          import('./sclass/sclass.route').then((m) => m.sclassRoutes),
      },
      {
        path: 'school',
        loadChildren: () =>
          import('./school/school.route').then((m) => m.schoolRoutes),
      },
      {
        path: 'marks',
        loadComponent: () =>
          import('./marks/marks.component').then((m) => m.MarksComponent),
      },
    ],
  },
];
