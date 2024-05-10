import { Component, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user.model';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent {
  @Input() user: User = {
    id: 0,
    type: 'demandante',
    personalData: {
      nifPassport: '',
      firstName: '',
      lastName: '',
      gender: 'Male',
      dateOfBirth: ''
    },
    address: {
      street: '',
      number: '',
      postalCode: '',
      city: ''
    },
    studies: [],
    workExperience: []
  };

  @Input() isNew = true;

  constructor(public dialogRef: MatDialogRef<UserEditComponent>) {}

  saveUser(form: any): void {
    if (form.valid) {
      // Logic to save or update user
      this.dialogRef.close(this.user);
    }
  }
}
