import { Component, OnInit } from '@angular/core';
import data from '../../assets/mock_tree';
import { IState, ITreeData } from '../models/state.model';
import { DataflowService } from '../services/dataflow.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  private state = <IState>{};
  private tree: Array<ITreeData>;

  constructor(
    private dataflow: DataflowService
  ) {
    this.state.checkedBoxes = {};
    this.tree = data;
  }

  ngOnInit() {
    this.state = this.initializeStateData(this.tree);
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

    this.dataflow.stateChanged(initState);
    return initState;
  }

  changeState(dataTree: ITreeData, flag: boolean) {
    this.state.checkedBoxes[dataTree.label] = flag;
    dataTree.children.forEach(child => {
      this.state.checkedBoxes[child.label] = flag;
    });
    this.dataflow.stateChanged(this.state);
  }

  changeStatus(dataTree: ITreeData, input: HTMLInputElement): void {
    this.changeState(dataTree, input.checked);
  }

  showItems(dropdown: HTMLDivElement, btn: HTMLButtonElement) {
    dropdown.classList.toggle('tree__dropdown--showDropdown');
    btn.classList.toggle('tree__dropbtn--anchor');
  }
}
