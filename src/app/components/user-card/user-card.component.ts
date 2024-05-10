import { Component, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'] // Estilos SCSS
})
export class UserCardComponent {
  @Input() user!: User;
}
