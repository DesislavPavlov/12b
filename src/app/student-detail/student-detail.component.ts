import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
// import { trigger, style, transition, animate, query, group, stagger, state } from '@angular/animations';

@Component({
  selector: 'app-student-detail',
  imports: [NgFor, NgIf],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.css',
  // animations: [
  //   trigger('detailViewTrigger', [
  //     transition(':enter', [
  //       group([
  //         query(':self', [
  //           style({ opacity: 0 }),
  //           animate('300ms ease-out', style({ opacity: 1 }))
  //         ]),
  //         query('.carousel', [
  //           style({ transform: 'translateY(-100px)', opacity: 0 }),
  //           animate('500ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
  //         ]),
  //         query('#detail-name, blockquote', [
  //           style({ transform: 'translateX(-50px)', opacity: 0 }),
  //           animate('400ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
  //         ]),
  //         query('.comments', [
  //           style({ transform: 'translateY(-50px)', opacity: 0}),
  //           animate('600ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
  //         ]),
  //         query('.comment', [
  //           style({ transform: 'translateY(-50px)', opacity: 0}),
  //           stagger(250, [
  //             animate('600ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
  //           ])
  //         ])
  //       ])
  //     ]),
  //     transition(':leave', [
  //       animate('300ms ease-in', style({ opacity: 0 }))
  //     ])
  //   ]),
  //   trigger('overlayAnimation', [
  //     transition(':enter', [
  //       style({ opacity: 0 }),
  //       animate(
  //         '800ms ease-out',
  //         style({ opacity: 1 })
  //       )
  //     ]),
  //     transition(':leave', [
  //       animate(
  //         '300ms ease-in',
  //         style({ opacity: 0 })
  //       )
  //     ])
  //   ]),
  //   trigger('carouselAnimation', [
  //     state(
  //       'center',
  //       style({ display: 'block', opacity: 1, transform: 'translateX(0) scale(1)' })
  //     ),
  //     state(
  //       'left',
  //       style({ display: 'none', opacity: 0, transform: 'translateX(-30%) scale(0.85)' })
  //     ),
  //     state(
  //       'right',
  //       style({ display: 'none', opacity: 0, transform: 'translateX(30%) scale(0.85)' })
  //     ),
  //     transition('* => center', animate('250ms 155ms ease-in')),
  //     transition('center => *', animate('150ms ease-out')),
  //   ]),
  // ]
})
export class StudentDetailComponent {
  @Input() selectedStudent: any;
  currentImageIndex: number = 0;
  carouselInterval: any = null;
  isCarouselPaused: boolean = false;

  ngOnInit() {
    this.startAutoScroll();
  }

  closeStudentDetails(): void {
    this.stopAutoScroll();
    this.selectedStudent = null;
  }

  selectImage(index: number): void {
    this.currentImageIndex = index;
    if (!this.isCarouselPaused)
      this.resetAutoScroll();
  }

  // Auto-scroll logic
  startAutoScroll(): void {
    this.carouselInterval = setInterval(() => {
      if (this.selectedStudent?.carouselImgSrcs?.length)
        this.currentImageIndex = (this.currentImageIndex + 1) % this.selectedStudent.carouselImgSrcs.length;
      }, 3000);
      this.isCarouselPaused = false;
  }
  
  stopAutoScroll(): void {
    clearInterval(this.carouselInterval);
    this.isCarouselPaused = true;
  }

  resetAutoScroll(): void {
    this.stopAutoScroll();
    this.startAutoScroll();
  }
}
