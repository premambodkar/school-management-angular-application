import { Injectable } from '@angular/core';
import { ClassInfoModel } from './class-info.model';
import { SchoolModel } from './school.model';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  schools: SchoolModel[] = [];

  classInfo: ClassInfoModel[] = [];
  constructor() {}
}
