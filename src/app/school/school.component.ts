import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common.service';
import { SchoolModel } from '../common/school.model';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  imports: [CommonModule],
  standalone: true,
})
export class SchoolComponent implements OnInit {
  schools: SchoolModel[] = [];
  constructor(public commonService: CommonService) {}

  ngOnInit() {
    this.getAllSchool();
  }

  addSchool() {
    const school = new SchoolModel();
    this.commonService.addSchool(school).subscribe((resp: any) => {});
  }

  getSchool(schoolId: number) {
    this.commonService.getSchool(schoolId).subscribe((resp: any) => {
      this.schools = resp;
    });
  }

  updateSchool() {
    const school = new SchoolModel();
    this.commonService.updateSchool(school).subscribe((resp: any) => {});
  }

  getAllSchool() {
    this.commonService.getSchools().subscribe((resp: any) => {
      this.schools = resp;
    });
  }
}
