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

}
