import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.model';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: User | undefined;

  constructor(private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtener userId de los parámetros de la URL
    const userId = this.route.snapshot.params['id'];

    console.log(userId)
    if (userId) {
      this.userService.getUserDetails(userId).subscribe(
        user => {
          this.user = user;
        },
        error => {
          console.error('Error fetching user details:', error);
        }
      );
    }
  }
}
