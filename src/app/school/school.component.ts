import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonService } from '../common/common.service';
import { SchoolModel } from '../common/school.model';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
})
export class SchoolComponent implements OnInit {
  schools: SchoolModel[] = [];
  addUpdateSchool: boolean = false;
  myForm: FormGroup;

  constructor(public commonService: CommonService, private fb: FormBuilder) {}

  ngOnInit() {
    this.getAllSchool();
    this.myForm = this.fb.group({
      schoolName: ['', Validators.required],
      schoolocation: ['', [Validators.required]],
    });
  }

  addSchool(myForm: FormGroup) {
    const school = new SchoolModel();
    school.name = this.myForm.value['schoolName'];
    school.location = this.myForm.value['schoolocation'];
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
