import { Component, OnInit } from '@angular/core';
import student from '../student.json'

interface Student {
  id: number;
  name: string;
  address: string;
  number: number;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Student[] = student

  constructor() { }

  ngOnInit(): void {
    
  }
  studentsearch=''
  studentPresent(): boolean {
    return this.students.some(student => student.name.toLowerCase() === this.studentsearch.toLowerCase());
  }
  
}
