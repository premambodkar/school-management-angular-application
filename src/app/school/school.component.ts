import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SchoolModel } from '../common/school.model';
import { SchoolService } from './school.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  imports: [CommonModule, RouterModule],
  standalone: true,
})
export class SchoolComponent implements OnInit {
  schools: SchoolModel[] = [];
  schoolId!: number;
  addUpdateSchool: boolean = false;

  constructor(public schoolService: SchoolService) {}

  ngOnInit() {
    this.getAllSchool();
  }

  getSchool(schoolId: number) {
    this.schoolService.getSchool(schoolId).subscribe((resp: any) => {
      this.schools = resp;
    });
  }

  getAllSchool() {
    this.schoolService.getSchools().subscribe((resp: any) => {
      this.schools = resp;
    });
  }

  deleteSchool(schoolId: number) {
    this.schoolService.deleteSchool(schoolId).subscribe((resp: any) => {
      this.getAllSchool();
    });
  }
}
