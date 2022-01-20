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

//get
  getPerson():Observable<Person[]>{
    return this.http.get<Person[]>(this.personUrl).pipe(
      tap(_ => this.log('got persons')),
      catchError(this.handleError<Person[]>('getPerson',[]))
    );

  }
//get by id
  getPersonID(id: number): Observable<Person> {
    const url = `${this.personUrl}/${id}`;
    return this.http.get<Person>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Person>(`getHero id=${id}`))
    );
  }

  // add(post) new person
  addPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.personUrl, person, this.httpOptions).pipe(
      tap((newPerson: Person) => this.log(`added person w/ id=${newPerson.id}`)),
      catchError(this.handleError<Person>('add person'))
    );
  }

  /** DELETE: delete the hero from the server */
  deletePerson(id: number): Observable<Person> {
    const url = `${this.personUrl}/${id}`;

    return this.http.delete<Person>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted person id=${id}`)),
      catchError(this.handleError<Person>('delete person'))
    );
  }

/** PUT: update the hero on the server */
updateHero(person: Person): Observable<any> {
  return this.http.put(this.personUrl, person, this.httpOptions).pipe(
    tap(_ => this.log(`updated person id=${person.id}`)),
    catchError(this.handleError<any>('update person'))
  );
}
// search by name of person
searchHeroes(term: string): Observable<Person[]> {
  if (!term.trim()) {
    return of([]);
  }
  return this.http.get<Person[]>(`${this.personUrl}/?name=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found person matching "${term}"`) :
       this.log(`no person matching "${term}"`)),
    catchError(this.handleError<Person[]>('search Person', []))
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

