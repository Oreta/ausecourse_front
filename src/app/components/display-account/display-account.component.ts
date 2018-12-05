import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service' ;

import {Params, ActivatedRoute, Router} from '@angular/router';
import {Http} from '@angular/http';
import {User} from '../../models/user' ;

@Component({
  selector: 'app-display-account',
  templateUrl: './display-account.component.html',
  styleUrls: ['./display-account.component.css']
})
export class DisplayAccountComponent implements OnInit {

  private loginError: boolean = false;
	private loggedIn = false ;
  private user : User ;

  constructor(
	  	private userService: UserService,
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
        // this.user.username = "test";
        // this.user.password = "test";
        // this.user.email = "test";
        // this.user.id = 32;
        // this.user.city = "Lille";
        // this.user.numeroRoad = 32;
        // this.user.Road = "Alfred de Vigny";
        // this.user.tel = 33123456789;
        console.log(this.user.username + " " + this.user.password + "  " + this.user.email + " " + this.user.id);
        console.log(res.json());

      },
      error => {
        this.loggedIn=false;
      }
    );
  }

}
