import { Component, OnInit } from '@angular/core';
import cartList from './data'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public cartList:any = cartList;
  public checked:boolean=true;
  constructor() { }

  ngOnInit() {
  }
  handleChange(){
    this.cartList.forEach(item=>item.isSelected=this.checked)
  }
  onChange(){
    this.checked=this.cartList.every(item=>item.isSelected)
  }
  subTotal(a,b){
    return (a*b).toFixed(2)
  }
  sum(){
    var total = 0;
    this.cartList.forEach(item=>{
        if(item.isSelected){
            total = item.productCount*item.productPrice+total;
        }
    })
    return total.toFixed(2);
  }
  handleClick(item){
    console.log(item);
    var cartList = this.cartList.filter(value=>value!==item);
    this.cartList = cartList;
    // for(let i = 0; i < this.cartList.length; ++i){
    //   if (this.cartList[i].id === id) {
    //     this.cartList.splice(i,1);
    //   }
    // }
  }
}