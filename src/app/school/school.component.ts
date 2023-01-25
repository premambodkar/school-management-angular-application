import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { CommonService } from '../common/common.service';
import { SchoolModel } from '../common/school.model';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'add',
        loadComponent: () =>
          import('./add-update-school/add-update-school.component').then(
            (m) => m.AddUpdateSchoolComponent
          ),
      },
    ],
  },
];

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
})
export class SchoolComponent implements OnInit {
  schools: SchoolModel[] = [];
  schoolId!: number;
  addUpdateSchool: boolean = false;

  constructor(public commonService: CommonService) {}

  ngOnInit() {
    this.getAllSchool();
  }

  getSchool(schoolId: number) {
    this.commonService.getSchool(schoolId).subscribe((resp: any) => {
      this.schools = resp;
    });
  }

  getAllSchool() {
    this.commonService.getSchools().subscribe((resp: any) => {
      this.schools = resp;
    });
  }

  deleteSchool(schoolId: number) {
    this.commonService.deleteSchool(schoolId).subscribe((resp: any) => {
      this.getAllSchool();
    });
  }
}
