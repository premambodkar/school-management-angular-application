import { Routes } from '@angular/router';
import { AddUpdateSclassComponent } from './add-update-sclass/add-update-sclass.component';
import { SclassComponent } from './sclass.component';

export const sclassRoutes: Routes = [
  {
    path: '',
    component: SclassComponent,
  },
  {
    path: 'add',
    component: AddUpdateSclassComponent,
  },
  {
    path: 'update',
    component: AddUpdateSclassComponent,
  },
];
