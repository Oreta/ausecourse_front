import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service' ;
import {User} from '../../models/user'; 
import {ListeCourse} from "../../models/ListeCourse" ;

@Component({
  selector: 'app-livreur-dashboard',
  templateUrl: './livreur-dashboard.component.html',
  styleUrls: ['./livreur-dashboard.component.css']
})
export class LivreurDashboardComponent implements OnInit {

	private loggedIn = false ; 
	private user : User ; 
	private courses : ListeCourse[] ; 

  constructor(private userService: UserService) { }

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
