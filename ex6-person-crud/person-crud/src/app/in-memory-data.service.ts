import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Person } from './persons';
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const persons = [
      { id: 1, name: 'Paloma', lastName:'Rebolleda', city:'Madrid'},
      { id: 2, name: 'Daniel', lastName:'Alvarez', city:'Alicante'},
      { id: 3, name: 'Sofia', lastName:'Velop', city:'Burgos'},
      { id: 4, name: 'Eduardo', lastName:'Cerrada', city:'Gijón'},
      { id: 5, name: 'Concepción', lastName:'Lopez', city:'Madrid'},
      { id: 6, name: 'Catherin', lastName:'Juarez', city:'Toledo'},
      { id: 7, name: 'Javier', lastName:'Alimerka', city:'San Lucar de Barrameda'},
      { id: 8, name: 'Matías', lastName:'Perez', city:'Granada'},
      { id: 9, name: 'Jose Antonio', lastName:'Guerra', city:'Vitoria'},
      { id: 10, name: 'Macarena', lastName:'Ruiz', city:'Soria'},
    ];
    return {persons};
  }
  genId(person: Person[]): number {
    return person.length > 0 ? Math.max(...person.map(person => person.id)) + 1 : 11;
  }
}