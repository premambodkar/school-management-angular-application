import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CommonService } from '../common/common.service';
import { SclassModel } from '../common/sclass.model';

@Injectable({
  providedIn: 'root',
})
export class SclassService {
  sclassInfoList: SclassModel[] = [];
  constructor(
    private readonly http: HttpClient,
    private readonly commonService: CommonService
  ) {}

  getAllSClass(): Observable<any[]> {
    return of(this.sclassInfoList);
  }

  getSClass(sclassId: number): Observable<any> {
    return of(
      this.sclassInfoList.find(
        (sclassInfo: SclassModel) => sclassInfo.id === sclassId
      )
    );
    // const url = `${this.commonService.url}/getSClass?schoolId=${schoolId}`;
    // return this.http.get(url);
  }

  addSClass(sclassInfo: SclassModel): Observable<any> {
    sclassInfo.id = +Math.random() * 100;
    return of(this.sclassInfoList.push(sclassInfo));
    // const url = `${this.commonService.url}/addSClass`;
    // return this.http.post(url, sclassInfo);
  }

  updateSClass(sclassInfo: SclassModel): Observable<any> {
    return of(
      this.sclassInfoList.forEach((item: SclassModel) => {
        if (item.id === sclassInfo.id) {
          item.location = sclassInfo.location;
          item.name = sclassInfo.name;
          item.noOfStudent = sclassInfo.noOfStudent;
          item.divisions = sclassInfo.divisions;
        }
      })
    );
    // const url = `${this.commonService.url}/updateSClass`;
    // return this.http.put(url, sclassInfo);
  }

  deleteSClass(sclassId: number): Observable<any> {
    return of(
      this.sclassInfoList.forEach((sclassInfo: SclassModel, index: number) => {
        if (sclassInfo.id === sclassId) {
          this.sclassInfoList.splice(index, 1);
        }
      })
    );
    // const url = `${this.commonService.url}/deleteSClass?sclassId=${sclassId}`;
    // return this.http.delete(url);
  }
}
