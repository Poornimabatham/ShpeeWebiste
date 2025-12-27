import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login1',
  standalone: true,
  imports: [],
  templateUrl: './login1.component.html',
  styleUrl: './login1.component.css'
})
export class Login1Component {

 constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['login']);
  }
}
