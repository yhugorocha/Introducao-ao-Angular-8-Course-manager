import { CoursesServices } from './course.services';
import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

    filteredCourses: Course[] = [];
    _courses: Course[] = [];
    _filterby!: string;

    constructor(private CoursesServices: CoursesServices){}

    ngOnInit(): void {

      this.retrieveAll();

    }

    retrieveAll(){
      this.CoursesServices.retrieveAll().subscribe({
        next: Course =>{
          this._courses = Course;
          this.filteredCourses = this._courses;
        },
        error: err => console.log("ERROR",err)
      })
    }
    deleteById(courseId: number):void{
      this.CoursesServices.deleteByid(courseId).subscribe({
        next: ()=> {console.log('Deleted with sucess');
        this.retrieveAll()
      },error: err =>
        console.log("ERROR",err)
      });
    }

    set filter(value:string){
      this._filterby = value;
      this.filteredCourses = this._courses.filter((course:Course)=>course.name.toLocaleLowerCase().indexOf(this._filterby.toLocaleLowerCase()) > -1);

    }
    get filter(){
      return this._filterby
    }

}
