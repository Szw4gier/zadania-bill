import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { DataflowService } from '../services/dataflow.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild('search') search: ElementRef;
  @HostListener('document:keyup', ['$event']) onkeyupHandler(
    event: KeyboardEvent
) {
    this.dataflow.shareSearch(this.search.nativeElement.value);
}

  constructor(
    private dataflow: DataflowService
  ) {}

  ngOnInit() {
    this.dataflow.shareSearch(this.search.nativeElement.value);
  }
}
