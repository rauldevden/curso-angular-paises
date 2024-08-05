import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map, delay } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(private httpClient: HttpClient) { }

  private getCountriesRequest(url: string): Observable<Country[]>{
    return this.httpClient.get<Country[]>(url)
      .pipe(
        catchError(() => of([])),
        // delay(500),
      )
  }

  // https://restcountries.com/v3.1/alpha/{code}
  searchCountryByAlphaCode(code: string): Observable<Country | null>{
    const url = `${this.apiUrl}/alpha/${code}`
    return this.httpClient.get<Country[]>(url)
      .pipe(
        map(countries => countries.length>0 ? countries[0]: null),
        catchError( () => of(null))
      );
  }

  // https://restcountries.com/v3.1/capital/{capital}
  searchCapital(queryCapital: string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${queryCapital}`
    return this.getCountriesRequest(url);
  }

  // https://restcountries.com/v3.1/name/{name}
  searchCountry(queryCountry: string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${queryCountry}`
    return this.getCountriesRequest(url);
  }

  // https://restcountries.com/v3.1/region/{region}
  searchRegion(queryRegion: string): Observable<Country[]>{
    const url = `${this.apiUrl}/region/${queryRegion}`
    return this.getCountriesRequest(url);
  }
}
