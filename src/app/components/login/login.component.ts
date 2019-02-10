import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service' ;

import {Params, ActivatedRoute, Router} from '@angular/router';
import {Http} from '@angular/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public serverPath = "https://ausecourseback.herokuapp.com" ;
	public loginError: boolean = false;
	public loggedIn = false ;
	public credential = {'username' : '', 'password' : '' } ;

	public emailSent: boolean = false ;
	public usernameExists:boolean ;
	public emailExists:boolean ;
	public username:string;
	public email: string ;
	public password : string ;
	public passwordConfirmation : string ;
	public passwordNotMaching : boolean ;

	public emailNotExists:boolean = false ;
	public forgetPasswordEmailSent:boolean ;
	public recoverEmail:string ;
	public mode : string ;

	public addressLivraison : string ;
	public telephone : number ;


 	constructor(
	  	private userService: UserService,
	  	private router:Router,
	    private http:Http,
	    private route:ActivatedRoute) { }

	onLogin() {
	this.userService.sendCredential(this.credential.username, this.credential.password).subscribe(
		res => {
			console.log("merdeee " + res.json());
			localStorage.setItem("xAuthToken", res.json().token);
			this.loggedIn = true;
			console.log("login works ! " + res.json().token);
			//location.reload();

			window.location.href = "http://localhost:4200/home" ;
		},
		error => {
			this.loggedIn = false;
			this.loginError = true;
			console.log("login not working :( ")
		}
	);

	}

	onNewAccount() {
		this.usernameExists = false ;
		this.emailExists = false ;
		this.emailSent = false ;
		if(this.password != this.passwordConfirmation)
			this.passwordNotMaching = true ;

		this.userService.newUser(this.username, this.email, this.password, this.mode, this.addressLivraison, this.telephone).subscribe(
			res => {
				console.log(res);
				this.emailSent = true;
			},
			error => {
				console.log(error.text());
				let errorMessage = error.text();
				if(errorMessage==="usernameExists") this.usernameExists=true ;
				if(errorMessage==="emailExists") this.emailExists=true ;
			}
		);
	}


	onForgetPassword() {
		this.forgetPasswordEmailSent = false;
		this.emailNotExists = false ;

		this.userService.retrievePassword(this.recoverEmail).subscribe(
			res => {
				console.log(res);
				this.forgetPasswordEmailSent = true ;
			},
			error => {
				console.log(error.text());
				let errorMessage = error.text();
				if (errorMessage === "Email not found") this.emailNotExists=true ;

			}
		);
	}


	ngOnInit() {
		this.userService.checkSession().subscribe(
			res => {
				this.loggedIn = true ;
				console.log("voila " + this.loggedIn);
			},
			error => {
				this.loggedIn = false ;
				console.log("voila " + this.loggedIn);
			}
		);

	}

}
