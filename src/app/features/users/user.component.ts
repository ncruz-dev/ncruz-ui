import { Component, signal, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  users = signal<User[]>([]);
  user = signal<User>({ name: '', email: '' });

  displayedColumns = ['id', 'name', 'email', 'actions'];

  constructor(private service: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.service.getUsers().subscribe(data => this.users.set(data));
  }

  saveUser() {
    const u = this.user();

    if (u.id) {
      this.service.updateUser(u.id, u).subscribe(() => {
        this.reset();
        this.loadUsers();
      });
    } else {
      this.service.createUser(u).subscribe(() => {
        this.reset();
        this.loadUsers();
      });
    }
  }

  editUser(u: User) {
    this.user.set({ ...u });
  }

  deleteUser(id: number) {
    this.service.deleteUser(id).subscribe(() => this.loadUsers());
  }

  reset() {
    this.user.set({ name: '', email: '' });
  }
}
