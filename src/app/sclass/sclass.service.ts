import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CommonService } from '../common/common.service';
import { SclassModel } from '../common/sclass.model';

@Injectable({
  providedIn: 'root',
})
export class SclassService {
  constructor(
    private readonly http: HttpClient,
    private readonly commonService: CommonService
  ) {}

  getAllSClass(): Observable<any[]> {
    return of([
      {
        id: 1,
        name: 'CLass 1',
        location: 'First Floor',
        divisions: 5,
        noOfStudent: 150,
      },
    ]);
  }

  getSClass(schoolId: number): Observable<any> {
    const url = `${this.commonService.url}/getSchool?schoolId=${schoolId}`;
    return this.http.get(url);
  }

  addSClass(schoolInfo: SclassModel): Observable<any> {
    const url = `${this.commonService.url}/addSchool`;
    return this.http.post(url, schoolInfo);
  }

  updateSClass(schoolInfo: SclassModel): Observable<any> {
    const url = `${this.commonService.url}/updateSchool`;
    return this.http.put(url, schoolInfo);
  }

  deleteSClass(schoolId: number): Observable<any> {
    const url = `${this.commonService.url}/getSchool?schoolId=${schoolId}`;
    return this.http.delete(url);
  }
}
