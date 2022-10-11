import { Component, OnInit } from '@angular/core';
declare var filtering:any;
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
headerTitle: any;

  constructor() { }

  ngOnInit(): void {
    new filtering();
  }

}
