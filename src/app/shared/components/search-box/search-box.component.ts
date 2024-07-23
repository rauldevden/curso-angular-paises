import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = '';

  @Output()
  public searchBoxEmitter = new EventEmitter<string>();

  public inputValue: string = '';

  onInputEnter({value}: any){
    value.length !== 0
      ? this.searchBoxEmitter.emit(value)
      : ''
  }
}
