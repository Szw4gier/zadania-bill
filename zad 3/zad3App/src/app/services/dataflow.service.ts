import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { IState } from '../models/state.model';
import { ITreeData } from '../models/tree.model';

@Injectable({
  providedIn: 'root'
})
export class DataflowService {
  private stateSource = new Subject<IState>();
  private searchSource = new BehaviorSubject<string[]>(null);

  observeState$ = this.stateSource.asObservable();
  observeSearch$ = this.searchSource.asObservable();

  stateChanged(state: IState): void {
    this.stateSource.next(state);
  }

  shareSearch(searchData: string[]): void {
    this.searchSource.next(searchData);
  }





  initializeStateData(treeData: Array<ITreeData>): IState {
    const initState = <IState>{
      checkedBoxes: {}
    };

    treeData.forEach(parent => {
      initState.checkedBoxes[parent.label] = false;

      parent.children.forEach(child => {
        initState.checkedBoxes[child.label] = false;
      });
    });

    return initState;
  }

  changeState(state: IState, treeItem: ITreeData): IState {
    state.checkedBoxes[treeItem.label] = !state.checkedBoxes[treeItem.label];
    treeItem.children.forEach(child => {
      state.checkedBoxes[child.label] = state.checkedBoxes[treeItem.label];
    });

    return state;
  }
}
