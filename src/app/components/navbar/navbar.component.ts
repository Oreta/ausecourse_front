import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service' ;
import {Router} from '@angular/router'; 
import {User} from '../../models/user'; 



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	private loggedIn : boolean  ; 
	private user : User ; 
 
  constructor(private userService: UserService, 
  	private router:Router) { }

  ngOnInit() {
  	this.userService.checkSession().subscribe(
  		res => {
			this.loggedIn = true ;
			this.userService.getCurrentUser().subscribe(
			  res => {
			    this.user = res.json(); 
			    

			  },
			  error => {
			    this.loggedIn=false;
			  }      
			);  				
		}, 	
		error => {
			this.loggedIn=false;
		}
  	);
  }

    logout() {

  	this.userService.logout().subscribe(
		res => {

			//location.reload();
			this.loggedIn = false ;	
			this.router.navigate(['/login']);	
		}, 
		error => {

			console.log(error);
			//location.reload();
		}

  	);
  	
  }

}
