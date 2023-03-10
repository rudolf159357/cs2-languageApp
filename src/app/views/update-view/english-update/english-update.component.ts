import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Word } from 'src/app/models/wordModel';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-english-update',
  templateUrl: './english-update.component.html',
  styleUrls: ['./english-update.component.css']
})
export class EnglishUpdateComponent implements OnInit {

  idValue: string = "";

  constructor(private route: ActivatedRoute, private service: GetDataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idValue = params['id'];
      //console.log(this.idValue);
    });
  }


  updateEnglish(value: Word){
    value.id = Number(this.idValue);
    //console.log(values);
    this.service.updateEnglishData(value).subscribe({next: (res) => {
      console.log(res);
    },
    error: (err) => {
      console.log(err)
    }});
  }

}
