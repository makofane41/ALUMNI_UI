import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  headerTitle:string = "#News";
  headerDescription:string="";
  backgroundImg:string="";

  constructor() { }

  ngOnInit(): void {
  }

}
