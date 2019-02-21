import { Component, OnInit } from '@angular/core';
import data from '../../assets/mock_tree';
import { IState, ITreeData } from '../models/state.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  state = <IState>{};

  tree: Array<ITreeData>;

  constructor() {
    this.state.checkedBoxes = {};
    this.tree = data;
  }

  ngOnInit() {
    this.state = this.initializeStateData(this.tree);
  }

  initializeStateData(treeData: Array<ITreeData>): IState {
    let initState = <IState>{
      checkedBoxes: {}
    };

    treeData.forEach(parent => {
      initState.checkedBoxes[parent.label] = false;

      parent.children.forEach(child => {
        initState.checkedBoxes[child.label] = false;
      })
    });

    return initState;
  }

  changeState(data: ITreeData, flag: boolean) {
    this.state.checkedBoxes[data.label] = flag;
    data.children.forEach(child => {
      this.state.checkedBoxes[child.label] = flag;
    });
  }

  changeStatus(data: ITreeData, input: HTMLInputElement): void {
    this.changeState(data, input.checked);
  }
}
