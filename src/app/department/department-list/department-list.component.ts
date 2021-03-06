import {
  ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges,
  OnInit, Output,
  SimpleChanges
} from '@angular/core';
import { Department } from '../department';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DepartmentListComponent implements OnInit, OnChanges {

  @Input() departmentList: Department[] = [];

  @Input() title: string;

  @Output() selectDepartment = new EventEmitter<Department>();

  deptCount = 0;
  constructor() {
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('on init');
  }

  sendToParent(department: Department): void {
    console.log(department);
    this.selectDepartment.emit(department);
  }

}
