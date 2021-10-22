import { CoursesServices } from './course.services';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";

@Component({
  templateUrl: './courses.info.component.html'
})
export class CourseInfoComponent implements OnInit{

  course!: Course;

  constructor(private activatedRoute: ActivatedRoute, private CoursesServices: CoursesServices  ){}

  ngOnInit(): void{
    this.CoursesServices.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')!).subscribe({
      next: course => this.course = course,
      error: err=> console.log("Error",err)
    });
  }

  save(course: Course){
    this.CoursesServices.save(this.course).subscribe({
      next: course => console.log("Save with sucess!"),
      error: err=> console.log("Error",err)
    })
  }



}
