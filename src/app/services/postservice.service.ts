import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {
  private url='https://fathomless-castle-98105.herokuapp.com/api/v1/viewProfile';

  constructor(private httpclient: HttpClient) { }
  getUserprofile()
  {return this.httpclient.get(this.url);
  }
}
