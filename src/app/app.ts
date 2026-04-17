import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  darkMode = signal(true);

  platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.add('dark-theme');
    }
  }

  toggleTheme() {
    const isDark = !this.darkMode();
    this.darkMode.set(isDark);

    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.toggle('dark-theme', isDark);
    }
  }
}
