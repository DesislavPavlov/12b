import { Component, ElementRef, Input, Output, ViewChild } from '@angular/core';
import { Student } from '../student';
import { EventEmitter } from 'node:stream';

@Component({
  selector: 'app-student-card',
  imports: [],
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.css'
})
export class StudentCardComponent {
  @Input() student!: Student;
}
