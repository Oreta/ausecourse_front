import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service' ;
import {User} from '../../models/user'; 
import {Router, NavigationExtras} from '@angular/router'; 
import {Params, ActivatedRoute} from '@angular/router';
import {Http} from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	private loggedIn = false ; 
	private user : User ; 


  constructor(private userService: UserService,
  	private router:Router,
  	private http:Http,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.userService.checkSession().subscribe(
      res => {
        this.loggedIn=true;
        console.log("it works !");
      },
      error => {
        this.loggedIn=false;
        console.log("it's not working !" + localStorage.getItem('xAuthToken'));
      }
    );

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
  }

  logout() {

  	this.userService.logout().subscribe(
		res => {
			console.log(res)
			console.log("yaaaayy logout");
			//location.reload();		
		}, 
		error => {
			console.log("pffff ");
			console.log(error);
			//location.reload();
		}

  	);
  	this.router.navigate(['/']);
  }

}


