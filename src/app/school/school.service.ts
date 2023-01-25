import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CommonService } from '../common/common.service';
import { SchoolModel } from '../common/school.model';

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  constructor(
    private readonly http: HttpClient,
    private readonly commonService: CommonService
  ) {}

  getSchools(): Observable<any> {
    // return of([
    //   {
    //     id: 1,
    //     name: 'Dav',
    //     location: 'Pune',
    //   },
    // ]);
    const url = `https://school-management-node-application.premambodkar.repl.co/getSchool`;
    return this.http.get(url);
  }

  getSchool(schoolId: number): Observable<any> {
    const url = `${this.commonService.url}/getSchool?schoolId=${schoolId}`;
    return this.http.get(url);
  }

  addSchool(schoolInfo: SchoolModel) {
    const url = `${this.commonService.url}/addSchool`;
    return this.http.post(url, schoolInfo);
  }

  updateSchool(schoolInfo: SchoolModel) {
    const url = `${this.commonService.url}/updateSchool`;
    return this.http.put(url, schoolInfo);
  }

  deleteSchool(schoolId: number) {
    const url = `${this.commonService.url}/getSchool?schoolId=${schoolId}`;
    return this.http.delete(url);
  }
}
