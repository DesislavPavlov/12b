import { Component} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { StudentCardComponent } from '../student-card/student-card.component';
import { StudentDetailComponent } from '../student-detail/student-detail.component';
import { NgFor, NgIf } from '@angular/common';
import { Student } from '../student';

@Component({
  selector: 'app-students',
  imports: [HeaderComponent, StudentCardComponent, StudentDetailComponent, NgFor],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent {
  public students: Student[] = [
    {
      number: 1,
      name: "Божидара Георгиева",
      imgSrc: "assets/zlatko.jpg",
      comments: [
        {
          name: "Златкомир",
          imgSrc: "assets/zlatko.jpg",
          comment: "Lorem ipsum dolor sit amet bomboclatatata! Niggerson michakel simam oanoam?"
        },
        {
          name: "Златкомир2",
          imgSrc: "assets/zlatko.jpg",
          comment: "Lorem ipsum dolor sit amet bomboclatatata! Niggerson michakel simam oanoam?"
        },
        {
          name: "Златкомир2",
          imgSrc: "assets/zlatko.jpg",
          comment: "Lorem ipsum dolor sit amet bomboclatatata! Niggerson michakel simam oanoam?"
        },
      ],
      carouselImgSrcs: [
        "assets/zlatko.jpg",
        "assets/zlatko.jpg",
        "assets/GroupPhoto1.jpg"
      ]
    },
    // {
    //   number: 2,
    //   name: "Божидара Георгиева",
    //   imgSrc: "assets/zlatko.jpg"
    // },
    // {
    //   number: 3,
    //   name: "Божидара Георгиева",
    //   imgSrc: "assets/zlatko.jpg"
    // },
    // {
    //   number: 4,
    //   name: "Божидара Георгиева",
    //   imgSrc: "assets/zlatko.jpg"
    // },
    // {
    //   number: 5,
    //   name: "Божидара Георгиева",
    //   imgSrc: "assets/zlatko.jpg"
    // },
    // {
    //   number: 6,
    //   name: "Божидара Георгиева",
    //   imgSrc: "assets/zlatko.jpg"
    // },
    // {
    //   number: 7,
    //   name: "Божидара Георгиева",
    //   imgSrc: "assets/zlatko.jpg"
    // },
    // {
    //   number: 8,
    //   name: "Божидара Георгиева",
    //   imgSrc: "assets/zlatko.jpg"
    // },
    // {
    //   number: 9,
    //   name: "Божидара Георгиева",
    //   imgSrc: "assets/zlatko.jpg"
    // },
    // {
    //   number: 10,
    //   name: "Божидара Георгиева",
    //   imgSrc: "assets/zlatko.jpg"
    // },
    // {
    //   number: 11,
    //   name: "Божидара Георгиева",
    //   imgSrc: "assets/zlatko.jpg"
    // },
    // {
    //   number: 12,
    //   name: "Божидара Георгиева",
    //   imgSrc: "assets/zlatko.jpg"
    // },{
    //   number: 13,
    //   name: "Божидара Георгиева",
    //   imgSrc: "assets/zlatko.jpg"
    // },
    // {
    //   number: 14,
    //   name: "Божидара Георгиева",
    //   imgSrc: "assets/zlatko.jpg"
    // },
    // {
    //   number: 15,
    //   name: "Божидара Георгиева",
    //   imgSrc: "assets/zlatko.jpg"
    // },
    // {
    //   number: 16,
    //   name: "Божидара Георгиева",
    //   imgSrc: "assets/zlatko.jpg"
    // },

    // {
    //   number: 17,
    //   name: "Божидара Георгиева",
    //   imgSrc: "assets/zlatko.jpg"
    // },
    // {
    //   number: 18,
    //   name: "Божидара Георгиева",
    //   imgSrc: "assets/zlatko.jpg"
    // },
  ];

  selectedStudent: any;

  showStudentDetails(student: Student): void {
    this.selectedStudent = student;
  }  
}
