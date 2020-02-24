import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  public info:Object;
  constructor(public route:ActivatedRoute , public http:HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe(res=>{
      console.log(res.id)
      var id = res['id']
      var url:string = `https://douban.uieee.com/v2/movie/subject/`+id
      this.http.get(url).subscribe(res=>{
        // console.log(res);
        this.info = res
      })
    })
  }

}
