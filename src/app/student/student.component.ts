import { Component, OnInit,OnChanges } from '@angular/core';
import student from '../student.json'

interface Student {
  id: number;
  name: string;
  address: string;
  number: number;
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
  
    return this.students.some((student) =>
      String(student[selectedProperty]).toLowerCase().includes(lowerCaseSearchTerm)
    );
  }
  
  
}
