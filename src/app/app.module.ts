import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule,MatListModule, MatSidenavModule,MatButtonModule} from '@angular/material';
import { CoursesComponent } from './courses/courses.component';
import { ListcoursesService } from './listcourses.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    FavoriteComponent,
    PanelComponent,
    InputFormatDirective
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
=======


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
>>>>>>> 2cc763364c5899f5550a157a1a9d5070ea813ab3
  bootstrap: [AppComponent]
})
export class AppModule { }
