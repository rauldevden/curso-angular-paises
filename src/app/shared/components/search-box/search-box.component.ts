import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubsription?: Subscription;

  @Input()
  public placeholder: string = '';

  @Output()
  public searchBoxEmitter = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  public inputValue: string = '';

  ngOnInit(): void {
    this.debouncerSubsription = this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe(value =>
        value.length !== 0
          ? this.onDebounce.emit(value)
          : ''
       )
  }

  ngOnDestroy(): void {
    this.debouncerSubsription?.unsubscribe();
  }

  onKeyPress({value}: any){
    this.debouncer.next(value)
  }
}
