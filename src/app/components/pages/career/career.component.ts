import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})

export class CareerComponent implements OnInit {

  headerTitle:string = "#Careers";
  headerDescription:string="Read, watch, listen. #TUT_ALUMNI ahare their experiences, perspectives, and commnunity engagements.";
  backgroundImg:string="";

  constructor() { }

  ngOnInit(): void {
  }

}
