import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonService } from '../../common/common.service';
import { SchoolModel } from '../../common/school.model';

@Component({
  selector: 'app-add-update-school',
  templateUrl: './add-update-school.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class AddUpdateSchoolComponent implements OnInit {
  @Input()
  schoolId!: number;

  school: SchoolModel = new SchoolModel();
  myForm: FormGroup;

  constructor(
    public commonService: CommonService,
    private fb: FormBuilder,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      schoolName: ['', Validators.required],
      schoolocation: ['', [Validators.required]],
    });
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['schoolId']) {
        this.schoolId = params['schoolId'];
        this.getSchool();
      }
    });
  }

  addUpdateSchool(myForm: FormGroup) {
    if (myForm.valid) {
      this.school.name = this.myForm.value['schoolName'];
      this.school.location = this.myForm.value['schoolocation'];
      if (this.school.id) {
        this.commonService
          .updateSchool(this.school)
          .subscribe((resp: any) => {});
      } else {
        this.commonService.addSchool(this.school).subscribe((resp: any) => {});
      }
    }
  }

  getSchool() {
    this.commonService.getSchool(this.schoolId).subscribe((resp) => {
      this.school = Object.assign(resp);
    });
  }
}
