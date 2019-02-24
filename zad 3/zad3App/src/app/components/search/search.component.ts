import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild('search') search: ElementRef;
  @Output() queryEmit = new EventEmitter();

  emitQuery(): void {
    this.queryEmit.emit(this.search.nativeElement.value.split(' '));
  }

  ngOnInit() {
    this.queryEmit.emit(this.search.nativeElement.value.split(' '));
  }
}
