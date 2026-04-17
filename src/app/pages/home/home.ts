import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    RouterLink,        // ✅ REQUIRED for routerLink
    MatButtonModule    // ✅ REQUIRED for Material button
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {}
