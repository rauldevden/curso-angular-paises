import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(private httpClient: HttpClient) { }


  // https://restcountries.com/v3.1/capital/{region}
  searchCapital(queryCapital: string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${queryCapital}`
    return this.httpClient.get<Country[]>(url)
      .pipe(
        catchError( () => of([]))
      );
  }

  // https://restcountries.com/v3.1/name/{name}?fullText=true
  searchCountry(queryCountry: string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${queryCountry}`
    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError( () => of([]))
    );
  }

  // https://restcountries.com/v3.1/region/{region}
  searchRegion(queryRegion: string): Observable<Country[]>{
    const url = `${this.apiUrl}/region/${queryRegion}`
    return this.httpClient.get<Country[]>(url)
      .pipe(
        catchError( () => of([]))
      );
  }
}
