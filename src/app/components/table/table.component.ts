import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Word } from 'src/app/models/wordModel';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() data: Word[] = [];

  @Output() deleteWord: EventEmitter<Word> = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
  }

  delete(value: Word){
    //console.log(id);
    this.deleteWord.emit(value);
  }
}
