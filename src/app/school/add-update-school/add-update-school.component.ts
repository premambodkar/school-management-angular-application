import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolModel } from '../../common/school.model';
import { SchoolService } from '../school.service';

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
    public schoolService: SchoolService,
    private fb: FormBuilder,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      schoolName: ['', Validators.required],
      schoolocation: ['', [Validators.required]],
    });
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['schoolId']) {
        this.schoolId = +params['schoolId'];
        this.getSchool();
      }
    });
  }

  addUpdateSchool(myForm: FormGroup) {
    if (myForm.valid) {
      this.school.name = this.myForm.value['schoolName'];
      this.school.location = this.myForm.value['schoolocation'];
      if (this.school.id) {
        this.schoolService.updateSchool(this.school).subscribe((resp: any) => {
          this.router.navigate(['./school']);
        });
      } else {
        this.schoolService.addSchool(this.school).subscribe((resp: any) => {
          this.router.navigate(['./school']);
        });
      }
    }
  }

  getSchool() {
    this.schoolService.getSchool(this.schoolId).subscribe((resp) => {
      this.school = Object.assign(resp);
      this.myForm.patchValue({
        schoolName: this.school.name,
        schoolocation: this.school.location,
      });
    });
  }
}
