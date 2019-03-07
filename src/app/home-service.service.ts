import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HomeServiceService {

  constructor(private _http:HttpClient) { }

  // Call the API to get the data from its response

  getNews():Observable<any> {
    return this._http.get('https://api.rss2json.com/v1/api.json?rss_url=http://rss.cnn.com/rss/edition.rss')
  }
}
