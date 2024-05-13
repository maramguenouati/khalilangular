import { Component } from '@angular/core';
import { item } from '../Model/items.model';
@Component({
  selector: 'app-exemple',
  templateUrl: './exemple.component.html',
  styleUrls: ['./exemple.component.css']
})
export class ExempleComponent {

  Items :item[]= 
  [

    {id:1, name:"items 1" , quantity:5,available:false},
    {id:2, name:"items 2" , quantity:15,available:true},
    {id:3, name:"items 3" , quantity:3,available:false},
    {id:4, name:"items 4" , quantity:1,available:true}


  ]
    
  itemClick(item:item)
  {
    

    console.log("item chicked",item)

  }
}
