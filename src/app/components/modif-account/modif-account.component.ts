import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service' ;

import {Params, ActivatedRoute, Router} from '@angular/router';
import {Http} from '@angular/http';
import {User} from '../../models/user' ;


@Component({
  selector: 'app-modif-account',
  templateUrl: './modif-account.component.html',
  styleUrls: ['./modif-account.component.css']
})

export class ModifAccountComponent implements OnInit {
  public serverPath = "http://127.0.0.1:8080" ;
  public loginError: boolean = false;
  public loggedIn = false ;
  public credential = {'username' : '', 'password' : '' } ;

  public emailSent: boolean = false ;
  public usernameExists:boolean ;
  public emailExists:boolean ;
  public username:string;
  public email: string ;
  public password : string ;
  public city:string;
	public numeroRoad:number;
	public Road:string;
	public tel:number;
  public passwordConfirmation : string ;
  public passwordNotMaching : boolean ;

  public user : User ;

  public emailNotExists:boolean = false ;

  constructor(
	  	private userService: UserService,
	  	private router:Router,
	    private http:Http,
	    private route:ActivatedRoute) { }

  onUpdateAccount() {
  		if(this.password != this.passwordConfirmation)
  			this.passwordNotMaching = true ;

      if(this.username){
        this.user.username = this.username;
      }
      if(this.email){
        this.user.email = this.email;
      }
      if(this.city){
        this.user.city = this.city;
      }
      if(this.numeroRoad){
        this.user.numeroRoad = this.numeroRoad;
      }
      if(this.Road){
        this.user.Road = this.Road;
      }
      if(this.tel){
        this.user.tel = this.tel;
      }

      console.log(this.user.username)
  		this.userService.updateUserInfo(this.user, this.password, this.password).subscribe(
  			res => {
  				console.log(res);
  			},
  			error => {
  				console.log(error.text());
  				let errorMessage = error.text();
  			}
  		);
  }



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
        // this.user.email = "test@test.fr";
        // this.user.id = 32;
        // this.user.city = "Lille";
        // this.user.numeroRoad = 32;
        // this.user.Road = "Alfred de Vigny";
        // this.user.tel = 33123456789;
        console.log(res.json());

      },
      error => {
        this.loggedIn=false;
      }
    );
  }

}
