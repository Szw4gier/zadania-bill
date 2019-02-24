import { Component, OnInit } from '@angular/core';
import { IState } from './models/state.model';
import { ITreeData } from './models/tree.model';
import { DataflowService } from './services/dataflow.service';

import data from '../assets/mock_tree';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'zad3App';

  private state = <IState>{};
  private tree: Array<ITreeData>;

  constructor(
    private dataflow: DataflowService
  ) {
    this.state.checkedBoxes = {};
    this.tree = data;
  }

  ngOnInit() {
    this.state = this.dataflow.initializeStateData(this.tree);
  }

  itemChanged(treeItem: ITreeData): void {
    this.state = this.dataflow.changeState(this.state, treeItem);
    this.dataflow.stateChanged(this.state);
  }
}
