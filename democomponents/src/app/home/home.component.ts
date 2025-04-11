import { Component } from '@angular/core';
import { IntroComponent } from '../Components/intro/intro.component'; 
import { CoursesComponent } from '../Components/courses/courses.component';
import { FooterComponent } from '../Components/footer/footer.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [IntroComponent , CoursesComponent, FooterComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
