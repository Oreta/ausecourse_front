import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service' ; 
import {Order} from "../../models/order" ; 
import {User} from "../../models/user" ;

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

	private orders : Order[] ; 
	private currentUser : User ; 

  constructor(private userService :UserService) { }

  getAllOrders(user:User) {
  	this.userService.getAllOrders(user).subscribe(
		(res:Order[]) => {
			this.orders = res ; 
		},
		error => {
			console.log(error) ; 
		}  		
  	);
 	
  }

  ngOnInit() {

  	this.userService.getCurrentUser().subscribe(
      res => {
        this.currentUser = res.json(); 
        this.getAllOrders(this.currentUser); 
      },
      error => {
        console.log(error);
      }     
  	);   

  }

}
