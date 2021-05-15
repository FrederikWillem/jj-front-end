import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string = "http://localhost:8081/JJBackend/";

  constructor(private http: HttpClient) { }

  private log(message: string) {
    console.log(`API: ${message}`);
  }
  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getData(_urlEnd: string): Observable<any> {
    const url = `${this.apiUrl}/${_urlEnd}`;
    return this.http.get(url).pipe(
      tap(_ => this.log(`fetch string = ${_urlEnd}`)),
      catchError(this.handleError<null>(`getData urlEnd=${_urlEnd}`))
    );
  }

  getAllProducts(): Observable<any> {
    return this.getData("Producten");
  }

  getProduct(_id: number): Observable<any> {
    return this.getData(`Producten/${_id}`);
  }

  getAllProductsFromCategorie(_id: number): Observable<any> {
    return this.getData(`Producten/categorie/${_id}`);
  }

  getCategories(): Observable<any> {
    return this.getData("Eigenschappen/categorien");
  }
}
