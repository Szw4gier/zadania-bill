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
  private childToggle = 0;

  changeStatus(treeData: ITreeData): void {
    this.itemEmit.emit(treeData);
  }

  showItems(dropdown: HTMLDivElement, btn: HTMLButtonElement): void {
    dropdown.classList.toggle('tree__dropdown--showDropdown');
    btn.classList.toggle('tree__dropbtn--anchor');
  }

  showParent(parent: ITreeData, dropdown: HTMLDivElement): boolean {
    if (
    this.state.searchQuery.includes(parent.label) ||
    this.state.searchQuery[0] === '') {
      if (this.childToggle % 2 === 1) {
        dropdown.classList.toggle('tree__dropdown--showDropdown');
        this.childToggle++;
      }
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
      if (this.state.searchQuery.includes(child.label) && this.childToggle % 2 === 0) {
        dropdown.classList.toggle('tree__dropdown--showDropdown');
        this.childToggle++;
      }
      return true;
    }
    return false;
  }
}
