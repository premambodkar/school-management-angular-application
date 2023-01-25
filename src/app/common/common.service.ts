import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ClassInfoModel } from './class-info.model';
import { SchoolModel } from './school.model';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  url = '';
  classInfo: ClassInfoModel[] = [];

  constructor(private readonly http: HttpClient) {}

  getSchools(): Observable<any> {
    return of([
      {
        id: 1,
        name: 'Dav',
        location: 'Pune',
      },
    ]);
    const url = `${this.url}/getSchools`;
    return this.http.get(url);
  }

  getSchool(schoolId: number): Observable<any> {
    const url = `${this.url}/getSchool?schoolId=${schoolId}`;
    return this.http.get(url);
  }

  addSchool(schoolInfo: SchoolModel) {
    const url = `${this.url}/addSchool`;
    return this.http.post(url, schoolInfo);
  }

  updateSchool(schoolInfo: SchoolModel) {
    const url = `${this.url}/updateSchool`;
    return this.http.put(url, schoolInfo);
  }

  deleteSchool(schoolId: number) {
    const url = `${this.url}/getSchool?schoolId=${schoolId}`;
    return this.http.delete(url);
  }
}
