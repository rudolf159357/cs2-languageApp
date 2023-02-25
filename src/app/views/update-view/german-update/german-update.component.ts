import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Word } from 'src/app/models/wordModel';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-german-update',
  templateUrl: './german-update.component.html',
  styleUrls: ['./german-update.component.css']
})
export class GermanUpdateComponent implements OnInit {

  idValue: string = "";

  constructor(private route: ActivatedRoute, private service: GetDataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idValue = params['id']
      //console.log(this.idValue);
    });
  }

  updateGerman(values: Word){
    values.id = Number(this.idValue);
    //console.log(values);
    this.service.updateGermanData(values).subscribe({next: (res) => {
      console.log(res);
    },
    error: (err) => {
      console.log(err)
    }});
  }

}
