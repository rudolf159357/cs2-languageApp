import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Word } from 'src/app/models/wordModel';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() title: string = "Language";

  @Output() submitLangForm: EventEmitter<Word> = new EventEmitter();
  
  inputValues: Word = {
    id: 0,
    word: "",
    translation: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(){
    //console.log(`${this.inputValues.word} / ${this.inputValues.translation} `);

    this.submitLangForm.emit(this.inputValues);

    this.inputValues.word = "";
    this.inputValues.translation = "";
  }
}
