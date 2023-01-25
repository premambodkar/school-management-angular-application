import { Routes } from '@angular/router';
import { AddUpdateSchoolComponent } from './add-update-school/add-update-school.component';
import { SchoolComponent } from './school.component';

export const schoolRoutes: Routes = [
  {
    path: '',
    component: SchoolComponent,
    children: [
      {
        path: 'add',
        component: AddUpdateSchoolComponent,
      },
      {
        path: 'update/:schoolId',
        component: AddUpdateSchoolComponent,
      },
    ],
  },
  {
    path: 'add',
    component: AddUpdateSchoolComponent,
  },
  {
    path: 'update/:schoolId',
    component: AddUpdateSchoolComponent,
  },
];
