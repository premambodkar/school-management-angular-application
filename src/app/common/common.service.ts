import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassInfoModel } from './class-info.model';
import { SchoolModel } from './school.model';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  url =
    'https://expresssimplexpaltv-ui5t--3010.local-credentialless.webcontainer.io/';
  classInfo: ClassInfoModel[] = [];
  constructor(private readonly http: HttpClient) {}

  getSchools(): Observable<any> {
    const url = `${this.url}/getSchools`;
    return this.http.get(
      'https://expresssimplexpaltv-ui5t--3010.local-credentialless.webcontainer.io/getSchool'
    );
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
}
