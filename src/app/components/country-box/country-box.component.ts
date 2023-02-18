import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-country-box',
  templateUrl: './country-box.component.html',
  styleUrls: ['./country-box.component.css']
})
export class CountryBoxComponent implements OnInit {

  @Input() imgPath: string = "";
  @Input() text: string = "Country";
  @Input() url: string = "languages";

  constructor() { }

  ngOnInit(): void {
  }

}
