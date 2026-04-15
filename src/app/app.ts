import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './layout/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  //imports: [RouterOutlet, DashboardComponent],
  imports: [DashboardComponent],
  template: `<app-dashboard></app-dashboard>`,
  styleUrl: './app.css'
})

export class App {}
