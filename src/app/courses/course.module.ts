import { ReplacePipe } from './../pipe/replace.pipe';

import { StarModule } from './../shared/star/star.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { CoursesComponent } from './courses.component';
import { CourseInfoComponent } from './courses.info.component';



@NgModule({
  declarations:[
    CourseInfoComponent,
    CoursesComponent,
    ReplacePipe
  ],
  imports:[
    StarModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
          path:'courses/info/:id', component: CourseInfoComponent
      },
      { path: 'Courses', component: CoursesComponent
      }
    ])
  ]
})

export class CourseModule{

}
