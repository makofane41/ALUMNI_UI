import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  private url='https://fathomless-castle-98105.herokuapp.com/api/v1/viewProfile';

  constructor(private httpclient: HttpClient) { }
  getUserprofile()
  {return this.httpclient.get(this.url);
  }
}
