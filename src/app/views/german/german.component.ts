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
    console.log(value);
  }

}
