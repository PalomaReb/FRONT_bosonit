import { Injectable } from '@angular/core';
import { Person } from './persons';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private personUrl = 'api/personas'; 

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
    
  private log(message: string) {
    this.messageService.add(`PersonService: ${message}`);
  }


  getPerson():Observable<Person[]>{
    return this.http.get<Person[]>(this.personUrl).pipe(
      tap(_ => this.log('got persons')),
      catchError(this.handleError<Person[]>('getPerson',[]))
    );

  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

