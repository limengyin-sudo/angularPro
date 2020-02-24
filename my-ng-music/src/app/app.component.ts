import {Component} from '@angular/core'
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public playlists:any;
  
  constructor(public http:HttpClient) { }
  title = 'my-ng-music';
  ngOnInit() {
    var url:string = "http://192.168.14.15:5000/top/playlist"
    this.http.get(url).subscribe(res=>{
      // console.log(res['playlists'])
      this.playlists = res['playlists']
    })
  }
  /* 通过index删除 */
  getId(index:number){
    this.playlists.splice(index,1);
  }
}