import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-grocery',
  templateUrl: './app-grocery.component.html',
  styleUrls: ['./app-grocery.component.css']
})
export class AppGroceryComponent implements OnInit {

  constructor() {
   }
  ngOnInit() {
  }
  items=[];
  addItem(newEntry: string) {
    if (newEntry) {
      this.items.push(newEntry);
      
    }
    event.preventDefault();
    event.stopImmediatePropagation();
  }
  onRemove(item){
    //console.log(this.items);
   const index:number=this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
  } 

    event.preventDefault();
    event.stopImmediatePropagation();
  }


}
