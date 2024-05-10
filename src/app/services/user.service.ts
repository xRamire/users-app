import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';
import { User } from '../interfaces/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/usuarios'; // Ruta corregida para obtener la lista de usuarios
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

  // Implementa métodos para manipular usuarios (crear, editar, eliminar, etc.)
}
