import type { Crew, Destination } from 'src/types/Types';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private destinationsUrl = 'http://localhost:3000/destinations';
  private crewsUrl = 'http://localhost:3000/crews';

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

  getCrews(): Observable<Crew[]> {
    return this.http.get<Crew[]>(this.crewsUrl)
      .pipe(
        catchError(this.handleError<Crew[]>('getCrews', []))
      );
  }

  getCrew(id: number): Observable<Crew> {
    const crewUrl = `${this.crewsUrl}/${id}`;
    return this.http.get<Crew>(crewUrl).pipe(
      catchError(this.handleError<Crew>(`getCrew id=${id}`))
    );
  }


}
