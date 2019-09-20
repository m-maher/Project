import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  response = [];

  feeds = {
    title:'',
    url:''
  };

  constructor(private _home:HomeServiceService) {}

  // Get news data from items array in the API that i called it through home-service.service.ts

  getAllNews(){
    return this._home.getNews().subscribe( data => {

      for(var i = 0 ; i < data.items.length; i++){
        if(data.items[i].pubDate == null){
          data.items[i].pubDate = "No Date";
        }
      }
      this.response = data.items;

    });
  }

  // Get CNN - RSS Channed link from feed object in the API that i called it through home-service.service.ts

  getFeed(){
    return this._home.getNews().subscribe( feed => {
      this.feeds = feed.feed;
    });
  }

  ngOnInit() {
    this.getAllNews();
    this.getFeed();
  }

}
