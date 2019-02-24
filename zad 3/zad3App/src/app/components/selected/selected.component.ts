import { Component } from '@angular/core';
import { DataflowService } from '../../services/dataflow.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.scss']
})
export class SelectedComponent {
  selectedItems$: Observable<String[]>;

  constructor(
    private dataflow: DataflowService
  ) {
    this.selectedItems$ = this.dataflow.observeState$.pipe(
      map(args => {
        const keys = Object.keys(args.checkedBoxes);
        return keys.filter(key => {
          return args.checkedBoxes[key];
        });
      }));
  }
}
