import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Word } from 'src/app/models/wordModel';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() title: string = "Language";
  @Input() backButtonUrl: string = "/languages";

  error: boolean = false;

  @Output() submitLangForm: EventEmitter<Word> = new EventEmitter();
  
  inputValues: Word = {
    id: 0,
    word: "",
    translation: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  errorHandler(word: string): boolean{
   var  notAllowedSigns = ["<", ">", ".", "!", "?", "#", "@", "$", "%", "^", "&", "*", "(", ")", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    var result: boolean = false;

   notAllowedSigns.forEach(element => {
      if(word.includes(element)){
        result = true;
      } 
   });

   return result;
  }

  submitForm(){
    //console.log(`${this.inputValues.word} / ${this.inputValues.translation} `);
    //  error handling
    if(this.errorHandler(this.inputValues.word) || this.errorHandler(this.inputValues.translation) || 
      this.inputValues.word == "" || this.inputValues.translation == ""){
      this.error =true;
      this.inputValues.word = "";
      this.inputValues.translation = "";
    } else {
      this.error = false;
      this.submitLangForm.emit(this.inputValues);

    this.inputValues.word = "";
    this.inputValues.translation = "";
    }
  }
}
