import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { FirstLetterDirective } from '../../shared/directives/first-letter.directive';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  username = '';
  errorMessage = '';
  password = '';
  constructor(private router: Router, private fb: FormBuilder) {}
  ngOnInit(): void {}

  onSubmit() {
    if (0 === 0) {
      this.router.navigate(['home']);
    } else {
      this.errorMessage = 'Podaj poprawne dane';
    }
  }
}
