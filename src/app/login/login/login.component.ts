import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  username = '';
  errorMessage = '';
  password = '';
  constructor(private router: Router) {}
  ngOnInit(): void {}

  onSubmit() {
    if (0 === 0) { //uwierzytelnianie użytkownika
      this.router.navigate(['home']);
    } else {
      this.errorMessage = 'Podaj poprawne dane';
    }
  }
}
