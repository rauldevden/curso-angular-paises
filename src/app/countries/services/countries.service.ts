import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map, tap} from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  public cacheStore : CacheStore= {
    byCapital: {
      term: '',
      countries:[],
    },
    byCountry: {
      term: '',
      countries:[],
    },
    byRegion: {
      region: '',
      countries:[],
    },
  }

  constructor(private httpClient: HttpClient) {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage(){
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage(){
    if(localStorage.getItem('cacheStore')){
      this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
    }
  }

  private getCountriesRequest(url: string): Observable<Country[]>{
    return this.httpClient.get<Country[]>(url)
      .pipe(
        catchError(() => of([])),
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
    return this.getCountriesRequest(url)
      .pipe(
        tap( (countries)=> {this.cacheStore.byCapital={term:queryCapital, countries}} ),
        tap(()=> this.saveToLocalStorage())
      )
  }

  // https://restcountries.com/v3.1/name/{name}
  searchCountry(queryCountry: string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${queryCountry}`
    return this.getCountriesRequest(url)
    .pipe(
      tap( (countries)=> {this.cacheStore.byCountry={term:queryCountry, countries}} ),
      tap(()=> this.saveToLocalStorage())
    )
  }

  // https://restcountries.com/v3.1/region/{region}
  searchRegion(queryRegion: Region): Observable<Country[]>{
    const url = `${this.apiUrl}/region/${queryRegion}`
    return this.getCountriesRequest(url)
    .pipe(
      tap( (countries)=> {this.cacheStore.byRegion={region:queryRegion, countries}} ),
      tap(()=> this.saveToLocalStorage())
    )
  }
}
