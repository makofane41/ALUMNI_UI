import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  headerTitle:string = "#LET'S CONNECT";
  headerDescription:string="";
  backgroundImg:string="";

  ngOnInit(): void {
  }

}
