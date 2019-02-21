import { Component, OnInit } from '@angular/core';
import data from '../../assets/mock_tree';
import { IState, IInputState } from '../models/state.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  state = <IState>{
    checkedBoxes: Array<IInputState>()
  };

  tree: Array<Object>;

  constructor() {
    this.state.checkedBoxes = [];
    this.tree = data;
  }

  ngOnInit() {
    console.log(this.initializeStateData(this.tree));

    // console.log(this.tree);
  }

  initializeStateData(treeData: Array<Object>): Array<IInputState> {
    let updateState = <IState>{
      checkedBoxes: Array<IInputState>()
    };

    treeData.forEach(parent => {
      updateState.checkedBoxes.push(<IInputState>{
        label: parent.label,
        value: false
      });

      parent.children.forEach(child => {
        updateState.checkedBoxes.push(<IInputState>{
          label: child.label,
          value: false
        });
      })
    });

    return updateState;
  }

  checkStatus(element): void {
    this.changeStatus(element.value);

    let childAmount = 0;
    while (childAmount < element.children.lenght) {
      this.changeStatus(element.children[childAmount].value);

      childAmount++;
    }
  }

  changeStatus(value): void {
    this.state.checkedBoxes.push(value);
  }
}
