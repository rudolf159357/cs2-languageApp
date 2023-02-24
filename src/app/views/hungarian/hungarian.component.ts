import { Component, OnInit } from '@angular/core';
import { Word } from 'src/app/models/wordModel';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-hungarian',
  templateUrl: './hungarian.component.html',
  styleUrls: ['./hungarian.component.css']
})
export class HungarianComponent implements OnInit {

  langData: Word[] = [];

  constructor(private service: GetDataService) { }

  ngOnInit(): void {
    this.service.getHungarianData().subscribe({next: (res) => {
      //console.log(res);
      this.langData = res;
    },
    error: (err) => {
      console.log(err)
    }});
  }

  submitForm(value: Word){
    this.service.createHungarianData(value).subscribe({next: (res) => {
      console.log(res);
      this.langData.push(res);
    },
    error: (err) => {
      console.log(err)
    }});
  }

  deleteWord(value: Word){
    this.service.deleteHungarianData(value).subscribe({next: (res) => {
      //console.log(res);
      this.langData = this.langData.filter(value => value.id != res.id);
    },
    error: (err) => {
      console.log(err);
    }});
  }

}
