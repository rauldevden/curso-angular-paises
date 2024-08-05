import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];
  public isLoading: boolean = false;

  constructor(
    private countriesService: CountriesService
  ){}

  searchByCapital(term: string){
    this.isLoading = true;
    this.countriesService.searchCapital(term)
      .subscribe(countriesResponse => {
        this.isLoading = false;
        this.countries = countriesResponse;
      })
  }

}
