import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { users } from '../../data/users';

export interface User {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  dob: number;
  monthlyFee: number;
  email: string;
  iban: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private readonly http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return of(users);
  }
}
