import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common.service';
import { SchoolModel } from '../common/school.model';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  standalone: true,
  styleUrls: ['./school.component.css'],
})
export class SchoolComponent implements OnInit {
  schools: SchoolModel[] = [];
  constructor(public commonService: CommonService) {}

  ngOnInit() {
    this.getAllSchool();
  }

  addSchool() {
    const school = new SchoolModel();

    this.commonService.addSchool().subscribe((resp: any) => {
      this.schools = _.clonedeep(resp);
    });
  }

  getSchool() {}

  updateSchool() {}

  getAllSchool() {
    this.commonService.getSchools().subscribe((resp: any) => {
      this.schools = _.clonedeep(resp);
    });
  }
}
