import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CommonService } from '../common/common.service';
import { SchoolModel } from '../common/school.model';

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  schoolListInfo: SchoolModel[] = [];

  constructor(
    private readonly http: HttpClient,
    private readonly commonService: CommonService
  ) {}

  getSchools(): Observable<any> {
    return of(this.schoolListInfo);
    // const url = `https://school-management-node-application.premambodkar.repl.co/getSchool`;
    // return this.http.get(url);
  }

  getSchool(schoolId: number): Observable<any> {
    return of(
      this.schoolListInfo.find(
        (schoolInfo: SchoolModel) => schoolInfo.id === schoolId
      )
    );
    // const url = `${this.commonService.url}/getSchool?schoolId=${schoolId}`;
    // return this.http.get(url);
  }

  addSchool(schoolInfo: SchoolModel) {
    schoolInfo.id = +Math.random() * 100;
    return of(this.schoolListInfo.push(schoolInfo));

    // const url = `${this.commonService.url}/addSchool`;
    // return this.http.post(url, schoolInfo);
  }

  updateSchool(schoolInfo: SchoolModel) {
    return of(
      this.schoolListInfo.forEach((item: SchoolModel) => {
        if (item.id === schoolInfo.id) {
          item.location = schoolInfo.location;
          item.name = schoolInfo.name;
        }
      })
    );
    // const url = `${this.commonService.url}/updateSchool`;
    // return this.http.put(url, schoolInfo);
  }

  deleteSchool(schoolId: number) {
    return of(
      this.schoolListInfo.forEach((sclassInfo: SchoolModel, index: number) => {
        if (sclassInfo.id === schoolId) {
          this.schoolListInfo.splice(index, 1);
        }
      })
    );
    // const url = `${this.commonService.url}/getSchool?schoolId=${schoolId}`;
    // return this.http.delete(url);
  }
}
