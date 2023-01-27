import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SclassModel } from '../../common/sclass.model';
import { SclassService } from '../sclass.service';

@Component({
  selector: 'app-add-update-sclass',
  templateUrl: './add-update-sclass.component.html',
  imports: [ReactiveFormsModule],
  standalone: true,
})
export class AddUpdateSclassComponent implements OnInit {
  @Input()
  sclassId!: number;

  sclass: SclassModel = new SclassModel();
  myForm: FormGroup;

  constructor(
    public sclassService: SclassService,
    private fb: FormBuilder,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', [Validators.required]],
      divisions: ['', Validators.required],
      noOfStudent: ['', [Validators.required]],
    });
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['sclassId']) {
        this.sclassId = +params['sclassId'];
        this.getSClass();
      }
    });
  }

  addUpdateSclass(myForm: FormGroup) {
    if (myForm.valid) {
      this.sclass.name = this.myForm.value['name'];
      this.sclass.location = this.myForm.value['location'];
      this.sclass.divisions = this.myForm.value['divisions'];
      this.sclass.noOfStudent = this.myForm.value['noOfStudent'];
      if (this.sclass.id) {
        this.sclassService.updateSClass(this.sclass).subscribe((resp: any) => {
          this.router.navigate(['./class']);
        });
      } else {
        this.sclassService.addSClass(this.sclass).subscribe((resp: any) => {
          this.router.navigate(['./class']);
        });
      }
    }
  }

  getSClass() {
    this.sclassService.getSClass(this.sclassId).subscribe((resp) => {
      this.sclass = Object.assign(resp);
      this.myForm.patchValue({
        name: this.sclass.name,
        location: this.sclass.location,
        divisions: this.sclass.divisions,
        noOfStudent: this.sclass.noOfStudent,
      });
    });
  }
}
