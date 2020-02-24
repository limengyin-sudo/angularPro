import { Component } from '@angular/core';
import {StorageService} from './services/storage.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-ng-todolist';
  public value:string = '';
  public todoList:any [] = [];
  public doneList:any [] = [];

  constructor(private storage:StorageService){ };

  ngOnInit(){
    this.initTodo();
  }

  handleEnter(value:string){
    console.log(value)
    let todoObj = {
      todo:value,
      check:false
    }
    var tempList = this.storage.getItem('todoList');
    if(tempList){
      tempList.push(todoObj)
      this.storage.setItem('todoList',tempList);
    }else{
      var tempData = []
      tempData.push(todoObj)
      this.storage.setItem('todoList',tempData);
    }
    this.todoList.push(todoObj)
    this.value = ''
  }
  changeTodo(index,check){
    if(check){
      this.doneList.push(this.todoList[index]);
      this.todoList.splice(index,1);
      this.storage.setItem('todoList',this.todoList)
      this.storage.setItem('doneList',this.doneList)
    }else{
      this.todoList.push(this.doneList[index]);
      this.doneList.splice(index,1);
      this.storage.setItem('doneList',this.doneList)
      this.storage.setItem('todoList',this.todoList)
    }
  }
  handleDel(index,check){
    if(check){
      this.todoList.splice(index,1);
      this.storage.setItem('todoList',this.todoList)
    }else{
      this.doneList.splice(index,1);
      this.storage.setItem('doneList',this.doneList)
    }
  }
  initTodo(){
    var todoArr = this.storage.getItem('todoList');
    if(todoArr){
      this.todoList = todoArr
    }
    var doneArr = this.storage.getItem('doneList');
    if(doneArr){
      this.doneList = doneArr
    }
  }
  clearData(){
    localStorage.clear();
    this.todoList = [];
    this.doneList = [];
  }
}
