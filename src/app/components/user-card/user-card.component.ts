import { Component, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() user!: User;

  constructor(private router: Router, private snackBar: MatSnackBar) {}

  navigateToDetails(userId: number): void {
    this.router.navigate(['/users', userId]);
  }

  editUser(userId: any) {

  }

  deleteUser(userId: any) {
    this.snackBar.open('User deleted successfully!', 'Close', {
      duration: 3000
    });
  }
  
}
