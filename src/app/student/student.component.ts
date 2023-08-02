import { Component, OnInit,OnChanges } from '@angular/core';
import student from '../student.json'

interface Student {
  id: number|string;
  name: string;
  address: string;
  number: number|string;
  [key: string]: number | string;
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
  selecttypevalue=''
  studentPresent(): boolean {
    if (this.studentsearch.trim() === '' || this.selecttypevalue.trim() === '') {
      // If the search term or select type value is empty, consider all students present
      return false;
    }
  
    const lowerCaseSearchTerm = this.studentsearch.toLowerCase();
    const selectedProperty = this.selecttypevalue.trim();
  
    return this.students.some((student) => {
      const propertyValue = student[selectedProperty];
  
      // Type guard: Check if the propertyValue is a string and then compare it
      if (typeof propertyValue === 'string') {
        return propertyValue.toLowerCase() === lowerCaseSearchTerm;
      }
  
      return false;
    });
  }
  
  
  
  
}
