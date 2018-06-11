import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule,MatListModule, MatSidenavModule,MatButtonModule} from '@angular/material';
import { CoursesComponent } from './courses/courses.component';
import { ListcoursesService } from './listcourses.service';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule
    

  ],
  providers: [ListcoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
