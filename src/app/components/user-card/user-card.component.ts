import { Component, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() user!: User;

  constructor(private router: Router) {}

  navigateToDetails(userId: number): void {
    this.router.navigate(['/users', userId]);
  }
  
}
