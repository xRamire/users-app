import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/user.model';
import { MatDialog } from '@angular/material/dialog';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  selectedType: string = '';

  constructor(
    private userService: UserService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.filteredUsers = users;
    });
  }

  applyFilter(): void {
    this.filteredUsers = this.selectedType
      ? this.users.filter(user => user.type === this.selectedType)
      : this.users;
  }

  createNewUser(): void {
    const dialogRef = this.dialog.open(UserEditComponent, {
      width: '400px',
      data: { isNew: true }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Logic to handle new user creation
        this.snackBar.open('New user created successfully!', 'Close', {
          duration: 3000
        });
      }
    });
  }

  editUser(user: User): void {
    const dialogRef = this.dialog.open(UserEditComponent, {
      width: '400px',
      data: { user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Logic to handle user update
        this.snackBar.open('User updated successfully!', 'Close', {
          duration: 3000
        });
      }
    });
  }

  deleteUser(user: User): void {
    // Logic to handle user deletion
    this.snackBar.open('User deleted successfully!', 'Close', {
      duration: 3000
    });
  }
}
