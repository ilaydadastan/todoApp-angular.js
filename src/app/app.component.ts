import { Component } from '@angular/core';
import {Model, TodoItem} from "./model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();
  isDisplay = false;

  getName(){
    return this.model.user;
  }
  getItems(){
    return this.model.items.filter(item=> this.isDisplay || !item.action );
  }
  addItem(value:string){
    if (value!=''){
      this.model.items.push(new TodoItem(value, false));
    }
  }
}
