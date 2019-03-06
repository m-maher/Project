import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  response = [];

  feeds = {
    title:'',
    url:''
  };

  constructor(private _home:HomeServiceService) {}

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
