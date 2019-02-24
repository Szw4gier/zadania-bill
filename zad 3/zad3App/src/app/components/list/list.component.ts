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
}
