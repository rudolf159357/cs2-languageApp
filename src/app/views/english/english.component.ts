import { Component, OnInit } from '@angular/core';
import { Word } from 'src/app/models/wordModel';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.css']
})
export class EnglishComponent implements OnInit {

  langData: Word[] = [];

  constructor(private service: GetDataService) { }

  ngOnInit(): void {
    this.service.getEnglishData().subscribe({next: (res) => {
      //console.log(res)
      this.langData = res;
    },
    error: (err) => {
      console.log(err)
    }});
  }

  submitForm(value: Word){
    this.service.createEnglishData(value).subscribe({next: (res) => {
      console.log(res)
      this.langData.push(res);
    }, 
    error: (err) => {
      console.log(err)
    }});
  }


  deleteWord(value: Word){
    this.service.deleteEnglishData(value).subscribe({next: (res) => {
      //console.log(value);
      this.langData = this.langData.filter(value => value.id != res.id);
    },
    error: (err) => {
      console.log(err)
    }})
  }
}
