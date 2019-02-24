import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IState } from '../models/state.model';
import { ITreeData } from '../models/tree.model';

@Injectable({
  providedIn: 'root'
})
export class DataflowService {
  private stateSource = new Subject<IState>();

  observeState$ = this.stateSource.asObservable();

  stateChanged(state: IState): void {
    this.stateSource.next(state);
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

    initState.searchQuery = [];

    return initState;
  }

  changeState(state: IState, treeItem: ITreeData): IState {
    state.checkedBoxes[treeItem.label] = !state.checkedBoxes[treeItem.label];
    treeItem.children.forEach(child => {
      state.checkedBoxes[child.label] = state.checkedBoxes[treeItem.label];
    });

    return state;
  }

  changeStateQuery(state: IState, query: string[]): IState {
    state.searchQuery = query;
    return state;
  }
}
