import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseURL: string = "http://localhost:8080/address-book/";

  constructor(private httpClient: HttpClient) {}

    getPersonData(): Observable<any> {
      return this.httpClient.get(this.baseURL + "get");
    }  

    /*
    * @method: delete method for deleting a record from adressbook.
    * @param: id.
    *return: Updated adressbook list after delete. 
    */
    deletePersonData(id: number): Observable<any>{
      return this.httpClient.delete(this.baseURL + "delete/" + id)
    }
}