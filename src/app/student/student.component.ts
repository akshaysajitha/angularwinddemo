import { Component, OnInit } from '@angular/core';
import student from '../student.json';

interface Student {
  id: number | string;
  name: string;
  address: string;
  number: number | string;
  [key: string]: number | string;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Student[] = student;
  studentsearch = '';
  selecttypevalue = '';
  foundStudents: Student[] = []; // New array to store matched student details

  constructor() {}

  ngOnInit(): void {}

  studentPresent(): boolean {
    if (this.studentsearch.trim() === '' || this.selecttypevalue.trim() === '') {
      // If the search term or select type value is empty, consider all students present
      this.foundStudents = [];
      return false;
    }

    const lowerCaseSearchTerm = this.studentsearch.toLowerCase();
    const selectedProperty = this.selecttypevalue.trim();

    this.foundStudents = this.students.filter((student) => {
      const propertyValue = student[selectedProperty];
      

      // Type guard: Check if the propertyValue is a string and then compare it
      if (typeof propertyValue === 'string') {
        return propertyValue.toLowerCase() === lowerCaseSearchTerm;
      }

      return false;
    });

    return this.foundStudents.length > 0;
  }
}
