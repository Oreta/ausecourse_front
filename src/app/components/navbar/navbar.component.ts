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

	private loggedIn : boolean = false ; 
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
			    console.log(this.user.username + " " + this.user.password + "  " + this.user.email + " " + this.user.id);
			    console.log(res.json());

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
			console.log(res)
			console.log("yaaaayy logout");
			//location.reload();
			this.loggedIn = false ;	
			this.router.navigate(['/login']);	
		}, 
		error => {
			console.log("pffff ");
			console.log(error);
			//location.reload();
		}

  	);
  	
  }

}
