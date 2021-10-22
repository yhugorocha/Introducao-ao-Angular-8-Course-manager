import { CourseModule } from './courses/course.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Erro404Component } from './erro404/erro404.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    Erro404Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'Courses', pathMatch: 'full'
      },
      {
        path: '**', component: Erro404Component
      },
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
