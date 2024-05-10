import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';
import { User } from '../interfaces/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/usuarios';
  private usersSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  public users$: Observable<User[]> = this.usersSubject.asObservable().pipe(shareReplay(1));

  constructor(private http: HttpClient) {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.http.get<User[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error loading users:', error);
        return throwError('Something went wrong while loading users data.');
      })
    ).subscribe(
      users => {
        this.usersSubject.next(users);
      },
      error => {
        console.error('Error updating users subject:', error);
      }
    );
  }

  getUsers(): Observable<User[]> {
    return this.users$;
  }

  createUser(newUser: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, newUser).pipe(
      catchError(error => {
        console.error('Error creating user:', error);
        return throwError('Something went wrong while creating the user.');
      })
    );
  }

  editUser(updatedUser: User): Observable<User> {
    const url = `${this.apiUrl}/${updatedUser.id}`;
    return this.http.put<User>(url, updatedUser).pipe(
      catchError(error => {
        console.error('Error updating user:', error);
        return throwError('Something went wrong while updating the user.');
      })
    );
  }

  deleteUser(userId: number): Observable<void> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.delete<void>(url).pipe(
      catchError(error => {
        console.error('Error deleting user:', error);
        return throwError('Something went wrong while deleting the user.');
      })
    );
  }

  getUserDetails(userId: number): Observable<User> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get<User>(url).pipe(
      catchError(error => {
        console.error('Error fetching user details:', error);
        return throwError('Something went wrong while fetching user details.');
      })
    );
  }
}
