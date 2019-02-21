import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IState } from '../models/state.model';

@Injectable({
  providedIn: 'root'
})
export class DataflowService {
  private stateSource = new Subject<IState>();
  observeState$ = this.stateSource.asObservable();

  stateChanged(state: IState): void {
    this.stateSource.next(state);
  }
}
