import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service' ;
import {User} from '../../models/user'; 
import {Order} from '../../models/order' ;
import {ListeCourse} from "../../models/ListeCourse" ;
import {OrderService} from "../../services/order.service" ; 
import {Router} from '@angular/router' ;

@Component({
  selector: 'app-livreur-dashboard',
  templateUrl: './livreur-dashboard.component.html',
  styleUrls: ['./livreur-dashboard.component.css']
})
export class LivreurDashboardComponent implements OnInit {

	private loggedIn = false ; 
	private user : User ; 
	private courses : ListeCourse[] ; 
  private order : Order ;
  private accepted : boolean ; 

  constructor(private router : Router , 
    private userService: UserService,
    private orderService : OrderService) { }

  getNotification(id:string){
    this.userService.getNotifications(id).subscribe(
      res => {
        this.courses = res.json() ; 
      },
      error => {
        console.log(error); 
      }    
    );
  }

  getOrderByListId(listId:string){
    this.orderService.getOrderByListId(listId).subscribe(
      (res:Order) => {
        this.order = res ;
      },
      error => {
        console.log(error);
      }
    );
  }

  onAccept(listCourse : ListeCourse){
    this.orderService.getOrderByListId(listCourse.id).subscribe(
      (res:Order) => {
        this.order = res ;
        this.orderService.acceptOrder(this.order.id).subscribe(
          (res:string) => {
            console.log(res); 
            this.accepted = true ;
          },
          error => {
            console.log(error);
          }
        );
      },
      error => {
        console.log(error);
      }
    );    
  }

  onRefuse(){

  }

  onDisplayOrder() {
    this.router.navigate(['/orderDetails',this.order.id, this.order.clientID]);
  }

  ngOnInit() {
    this.userService.checkSession().subscribe(
      res => {
        this.loggedIn=true;
      },
      error => {
        this.loggedIn=false;
      }
    );

    this.userService.getCurrentUser().subscribe(
      res => {
        this.user = res.json(); 
        this.userService.getNotifications(this.user.id).subscribe(
	      res  => {
	        this.courses = res.json(); 
	      },
	      error => {
	        console.log(error) ;
	      }        	
       	);
      },
      error => {
        this.loggedIn=false;
      }      
    );  	  	
  }

}
