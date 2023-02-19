import { Component, OnInit, Input } from '@angular/core';
import { Word } from 'src/app/models/wordModel';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() data: Word[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
