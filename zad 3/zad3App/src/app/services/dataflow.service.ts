import { Injectable, ElementRef } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { IState } from '../models/state.model';

@Injectable({
  providedIn: 'root'
})
export class DataflowService {
  private stateSource = new Subject<IState>();
  private searchSource = new BehaviorSubject<string>(null);

  observeState$ = this.stateSource.asObservable();
  observeSearch$ = this.searchSource.asObservable();

  stateChanged(state: IState): void {
    this.stateSource.next(state);
  }

  shareSearch(searchData: string): void {
    this.searchSource.next(searchData);
  }
}
