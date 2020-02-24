import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router,NavigationExtras} from "@angular/router"
@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  public playlists:string;
  constructor(public http:HttpClient,private router:Router) { }

  ngOnInit() {
    var url:string = "http://192.168.14.15:5000/top/playlist?cat=华语"
    this.http.get(url).subscribe(res=>{
      // console.log(res['playlists'])
      this.playlists = res['playlists']
    })
  }
  handleClick(id){
    let navigationExtras:NavigationExtras = {
      queryParams:{
        id:id
      }
    }
    this.router.navigate(['/musicInfo'],navigationExtras)
  }
}