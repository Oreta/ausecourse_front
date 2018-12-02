import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service' ;
import {User} from '../../models/user'; 
import {Router, NavigationExtras} from '@angular/router'; 
import {Params, ActivatedRoute} from '@angular/router';
import {Http} from '@angular/http';
import {CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	private loggedIn = false ; 
	private user : User ; 


  constructor(private userService: UserService,
    private cookieService : CookieService, 
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

  createShoppingList(user: User) {
    this.userService.createShoppingList(user).subscribe(
      (res : string) => {
        this.cookieService.put("listId", res) ;
      },
      error => {
        console.log(error) ;
      }  
    );
  }




}


