import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  public subjects:string;
  constructor(public http:HttpClient) { }

  ngOnInit() {
    var url:string = "https://douban.uieee.com/v2/movie/top250"
    this.http.get(url).subscribe(res=>{
      // console.log(res['subjects'])
      this.subjects = res['subjects']
    })
  }

}