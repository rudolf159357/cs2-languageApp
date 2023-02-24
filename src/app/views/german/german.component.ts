import { Component, OnInit } from '@angular/core';
import { Word } from 'src/app/models/wordModel';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-german',
  templateUrl: './german.component.html',
  styleUrls: ['./german.component.css']
})
export class GermanComponent implements OnInit {

  langData: Word[] = [];

  constructor(private service: GetDataService) { }

  ngOnInit(): void {
    this.service.getGermanData().subscribe({next: (res) => {
      //console.log(res)
      this.langData = res;
    },
    error: (err) => {
      console.log(err)
    }});
  }

  submitForm(value: Word){
    this.service.createGermanData(value).subscribe({next: (res) => {
      console.log(res);
      this.langData.push(res);
    },
      error: (err) => {
        console.log(err);
      }});
  }

  deleteWord(value: Word){
    //console.log(value);
    this.service.deleteGermanData(value).subscribe({next: (res) => {
      //console.log(res);
      this.langData = this.langData.filter(word => word.id != res.id);
    },
    error: (err) => {
      console.log(err);
    }})
  }
}
