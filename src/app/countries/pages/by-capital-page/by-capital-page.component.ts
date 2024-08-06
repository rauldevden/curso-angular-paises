import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit{

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialSearchValue: string = '';

  constructor(
    private countriesService: CountriesService
  ){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialSearchValue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital(term: string){
    this.isLoading = true;
    this.countriesService.searchCapital(term)
      .subscribe(countriesResponse => {
        this.isLoading = false;
        this.countries = countriesResponse;
      })
  }

}
