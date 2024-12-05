import { StudentComment } from "./student-comment";

export interface Student {
    number: number;
    name: string;
    imgSrc: string;
    comments: StudentComment[];
    carouselImgSrcs?: string[] | null;
}
