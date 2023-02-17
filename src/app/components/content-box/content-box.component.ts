import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.css']
})
export class ContentBoxComponent implements OnInit {

  @Input() title: string = "Some random title"; 
  @Input() text: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu imperdiet velit, eget feugiat metus. Donec convallis neque in leo condimentum, ac lacinia risus tincidunt. Vestibulum condimentum ex nulla, at interdum nisl commodo at. Sed vitae nisi augue. Nullam placerat vel dolor vitae ullamcorper."; 

  // there are two types: type1 and type2
  @Input() type: string = "type1";

  constructor() { }

  ngOnInit(): void {
  }

}
