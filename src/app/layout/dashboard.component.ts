import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { UserComponent } from '../features/users/user.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    UserComponent
  ],
  template: `
    <mat-toolbar color="primary">User Dashboard</mat-toolbar>

    <mat-sidenav-container style="height: 100vh;">
      <mat-sidenav mode="side" opened>
        <mat-nav-list>
          <a mat-list-item>Usuarios</a>
        </mat-nav-list>
      </mat-sidenav>

      <mat-sidenav-content style="padding: 20px;">
        <app-user></app-user>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `
})
export class DashboardComponent {}
