import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { PostService } from '../service/post.service';


@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})

export class ViewProfileComponent implements OnInit{
	userprofile:any;
	constructor(private service:PostService){}

	ngOnInit(): void {
		this.service.getUserprofile().subscribe(response=>{this.userprofile = response; console.log});
	}
	
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
