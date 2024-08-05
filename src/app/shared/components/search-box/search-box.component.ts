import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit{

  private debouncer: Subject<string> = new Subject<string>();

  @Input()
  public placeholder: string = '';

  @Output()
  public searchBoxEmitter = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  public inputValue: string = '';

  ngOnInit(): void {
    this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe(value =>
        value.length !== 0
          ? this.onDebounce.emit(value)
          : ''
       )
  }

  onKeyPress({value}: any){
    this.debouncer.next(value)
  }
}
