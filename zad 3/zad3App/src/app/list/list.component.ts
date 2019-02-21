import { Component, OnInit } from '@angular/core';
import data from '../../assets/mock_tree';
import { IState } from '../models/state.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  state = <IState>{
    checkedBoxes: Array<String>()
  };

  tree: Array<Object>;

  constructor() {
    this.state.checkedBoxes = [];
    this.tree = data;
  }

  ngOnInit() {
    console.log(this.tree);
  }

  checkStatus(element) {
    this.changeStatus(element.value);

    let childAmount = 0;
    while (childAmount < element.children.lenght) {
      this.changeStatus(element.children[childAmount].value);

      childAmount++;
    }
  }

  changeStatus(value) {
    this.state.checkedBoxes.push(value);
  }
}
