import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../services/message.service';


import { People } from '../models/people';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'

})
export class StarWarsPeopleService {
  private starWarsAPI = 'https://swapi.co/api';

  private log(message: string) {
    this.messageService.add(`StarWarsPeopleService: ${message}`);

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  constructor(
    private _http: HttpClient,
    private messageService: MessageService
  ) { }

    searchPeople(term: string): Observable<People[]> {
      if (!term.trim()) {
        return of([]);
      }
      return this._http.get<People[]>(`${this.starWarsAPI}/people/?name=${term}`).pipe(
        tap(_ => this.log(`found people matching "${term}"`)),
        catchError(this.handleError<People[]>('searchPeople', []))
      );
    }

    searchShips(term: string): Observable<People[]> {
      if (!term.trim()) {
        return of([]);
      }
      return this._http.get<People[]>(`${this.starWarsAPI}/ships/?name=${term}`).pipe(
        catchError(this.handleError<People[]>('searchPeople', []))
      );
    }

    searchFilms(term: string): Observable<People[]> {
      if (!term.trim()) {
        return of([]);
      }
      return this._http.get<People[]>(`${this.starWarsAPI}/films/?name=${term}`).pipe(
        catchError(this.handleError<People[]>('searchPeople', []))
      );
    }
}
