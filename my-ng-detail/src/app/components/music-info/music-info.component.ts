import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-music-info',
  templateUrl: './music-info.component.html',
  styleUrls: ['./music-info.component.css']
})
export class MusicInfoComponent implements OnInit {
  public info:Object;
  constructor(public route:ActivatedRoute,public http:HttpClient) { }

  ngOnInit() {
    this.route.queryParams.subscribe(res=>{
      console.log(res['id'])
      var id = res['id'];
      var url:string = 'http://192.168.14.15:5000/playlist/detail?id='+id
      this.http.get(url).subscribe(res=>{
        console.log(res['playlist']['tracks']);
        this.info = res['playlist']['tracks']
      })
    })
  }
}