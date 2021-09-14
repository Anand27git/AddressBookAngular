import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private personSource = new BehaviorSubject(new Person());
  currentPerson =  this.personSource.asObservable();
  constructor() { }

  changePerson(person: Person){
    this.personSource.next(person);
  }
}
