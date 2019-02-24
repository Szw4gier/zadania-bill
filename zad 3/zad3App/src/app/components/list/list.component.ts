import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { ITreeData } from '../../models/tree.model';
import { IState } from 'src/app/models/state.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() tree: ITreeData;
  @Input() state: IState;
  @Output() itemEmit = new EventEmitter();

  changeStatus(treeData: ITreeData): void {
    this.itemEmit.emit(treeData);
  }

  showItems(dropdown: HTMLDivElement, btn: HTMLButtonElement): void {
    dropdown.classList.toggle('tree__dropdown--showDropdown');
    btn.classList.toggle('tree__dropbtn--anchor');
  }

  showParent(parent: ITreeData): boolean {
    if (
    this.state.searchQuery.includes(parent.label) ||
    this.state.searchQuery[0] === '') {
      return true;
    }
    return false;
  }

  showChild(
    child: ITreeData,
    parent: ITreeData,
    dropdown: HTMLDivElement
    ): boolean {
    if (
    this.state.searchQuery.includes(child.label) ||
    this.state.searchQuery.includes(parent.label) ||
    this.state.searchQuery[0] === '') {
      if(this.state.searchQuery.includes(child.label)){
        dropdown.classList.toggle('tree__dropdown--showDropdown');
      }
      return true;
    }
    return false;
  }
}
