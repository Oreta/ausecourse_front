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

	public loggedIn = false ;
	public user : User ; 


  constructor(private userService: UserService,
    private cookieService : CookieService,
  	private router:Router,
  	private http:Http,
    private route:ActivatedRoute) { }

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
