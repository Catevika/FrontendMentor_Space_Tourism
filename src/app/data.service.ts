import type { Destination } from 'src/types/Types';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private destinationsUrl = 'http://localhost:3000/destinations';

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  constructor(private http: HttpClient) { }

  getDestinations(): Observable<Destination[]> {
    return this.http.get<Destination[]>(this.destinationsUrl)
      .pipe(
        catchError(this.handleError<Destination[]>('getDestinations', []))
      );
  }

  getDestination(id: number): Observable<Destination> {
    const destinationUrl = `${this.destinationsUrl}/${id}`;
    return this.http.get<Destination>(destinationUrl).pipe(
      catchError(this.handleError<Destination>(`getDestination id=${id}`))
    );
  }
}
