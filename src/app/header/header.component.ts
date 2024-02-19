import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Poprawiono 'styleUrl' na 'styleUrls'
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    // Subskrybuj się do zdarzenia NavigationEnd
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Zwijaj nawigację po każdej zakończonej nawigacji
        this.collapseNavbar();
      }
    });
  }

  collapseNavbar(): void {
    if (typeof document !== 'undefined') {
      // Znajdź przycisk nawigacji
      const navbarToggler = document.querySelector('.navbar-toggle') as HTMLButtonElement | null;
      // Sprawdź, czy navbarToggler nie jest null
      if (navbarToggler && navbarToggler.classList.contains('show')) {
        navbarToggler.click();
      }
    }
  }
}
