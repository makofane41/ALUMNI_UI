import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  url:any;
  //Angular 11, for stricter type
   msg = "";
   
   //selectFile(event) { //Angular 8
   selectFile(event: any) { //Angular 11, for stricter type
     if(!event.target.files[0] || event.target.files[0].length == 0) {
       this.msg = 'You must select an image';
       return;
     }
     
     var mimeType = event.target.files[0].type;
     
     if (mimeType.match(/image\/*/) == null) {
       this.msg = "Only images are supported";
       return;
     }
     if(event.target.files && event.target.files[0]){
     var reader = new FileReader();
     reader.readAsDataURL(event.target.files[0]);
     
     reader.onload = (_event) => {
       this.msg = "";
       this.url = reader.result;
       
     }
   }
   
   
 }
 }
 