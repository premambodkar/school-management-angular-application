import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SclassModel } from '../common/sclass.model';
import { SclassService } from './sclass.service';

@Component({
  selector: 'app-sclass',
  templateUrl: './sclass.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class SclassComponent implements OnInit {
  sclasses: SclassModel[] = [];
  constructor(
    private readonly sclassService: SclassService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.getAllSClass();
  }

  getAllSClass() {
    this.sclassService.getAllSClass().subscribe((resp: any) => {
      this.sclasses = resp;
    });
  }

  deleteClass(sclassId: number) {
    this.sclassService.deleteSClass(sclassId).subscribe((resp: any) => {
      this.getAllSClass();
    });
  }
}
