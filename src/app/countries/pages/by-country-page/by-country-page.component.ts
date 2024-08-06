import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialSearchValue: string = '';

  constructor(
    private countriesService: CountriesService
  ){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountry.countries;
    this.initialSearchValue = this.countriesService.cacheStore.byCountry.term;
  }

  searchByCountry(term: string){
    this.isLoading=true;
    this.countriesService.searchCountry(term)
      .subscribe(countriesResponse =>{
        this.countries = countriesResponse;
        this.isLoading=false;
      })
  }
}
