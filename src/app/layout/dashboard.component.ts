import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

import { UserComponent } from '../features/users/user.component';
import { DragonballComponent } from '../features/dragonball/dragonball.component';
import { signal } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    UserComponent,
    DragonballComponent
  ],
  template: `
    <mat-toolbar color="primary">User Dashboard</mat-toolbar>

    <mat-sidenav-container style="height: 100vh;">
      <mat-sidenav mode="side" opened>
        <mat-nav-list>
          <a mat-list-item (click)="setView('users')">Usuarios</a>
          <a mat-list-item (click)="setView('dragonball')">Dragon Ball</a>
        </mat-nav-list>
      </mat-sidenav>

      <mat-sidenav-content style="padding: 20px;">
        <!-- 🔥 Render dinámico -->
        <ng-container *ngIf="view() === 'users'">
          <app-user></app-user>
        </ng-container>

        <ng-container *ngIf="view() === 'dragonball'">
          <app-dragonball></app-dragonball>
        </ng-container>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `
})
export class DashboardComponent {
  // Estado de la vista (por defecto USERS)
  view = signal<'users' | 'dragonball'>('users');

  setView(v: 'users' | 'dragonball') {
    this.view.set(v);
  }
}
