import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import {Http, Headers} from '@angular/http'; 
import {Observable} from 'rxjs/Observable' ; 
import {Router} from '@angular/router' ; 
import {User} from '../models/user' ; 
import {AppConst} from '../constants/app-const' ;


@Injectable({
  providedIn: 'root'
})
export class UserService {

	private serverPath: string = "http://127.0.0.1:8080" ; 

	constructor(private http: Http, private router:Router,
		private httpClient : HttpClient) { } 

	sendCredential(username: string , password: string){
		let url = this.serverPath+"/token"; 

		let encodeCredentials = btoa(username+":"+password) ; 
		let basicHeader = "Basic " + encodeCredentials ; 
		let headers = new Headers ({
			'Content-Type' : 'application/x-www-form-urlencoded', 
			'Authorization' : basicHeader
		});

		
		return this.http.get(url,{headers: headers}); 
	}


	checkSession(){
		let url = this.serverPath+"/checkSession"; 
		console.log("xAuthToken hah: " + localStorage.getItem('xAuthToken'));
		let headers = new Headers ({
		'x-auth-token' : localStorage.getItem('xAuthToken')
		});
		return this.http.get(url,{headers: headers}); 
	}

	logout(){
		let url = this.serverPath+"/user/logout"; 
		let headers = new Headers ({
		'x-auth-token' : localStorage.getItem('xAuthToken')
		});
		return this.http.post(url,'',{headers: headers}); 
	}



	newUser(username: string, email:string, password: string) {
		let url = this.serverPath+'/user/newUser';
		let userInfo = {
			"username" : username,
			"email" : email,
			"password" : password
		}
		let tokenHeader = new Headers({
			'Content-Type' : 'application/json',
			'x-auth-token' : localStorage.getItem('xAuthToken')
		});

		return this.http.post(url, JSON.stringify(userInfo), {headers : tokenHeader});
	}


	updateUserInfo(user: User, newPassword: string, currentPassword: string) {
		let url = this.serverPath + "/user/updateUserInfo";
		let userInfo = {
			"id" : user.id,
			"username" : user.username,
			"currentPassword" : currentPassword,
			"email" : user.email,
			"newPassword" :newPassword
		};

		let tokenHeader = new Headers({
			'Content-Type' : 'application/json',
			'x-auth-token' : localStorage.getItem("xAuthToken")
		});
		return this.http.post(url, JSON.stringify(userInfo), {headers:tokenHeader});
	}


	retrievePassword(email:string) {
		let url = this.serverPath+'/user/forgetPassword';
		let userInfo = {
			"email" : email
		}
		let tokenHeader = new Headers({
			'Content-Type' : 'application/json',
			'x-auth-token' : localStorage.getItem('xAuthToken')
		});

		return this.http.post(url, JSON.stringify(userInfo), {headers : tokenHeader});
	}

	getCurrentUser() {
		let url = this.serverPath+'/user/getCurrentUser';

		let tokenHeader = new Headers({
			'Content-Type' : 'application/json',
			'x-auth-token' : localStorage.getItem('xAuthToken')
		});

		return this.http.get(url, {headers : tokenHeader});
	}

	createShoppingList(user : User) {
		let url = AppConst.serverPath+"user/createShoppingList";
  		return this.httpClient.post(url, user.id, {responseType:'text'});		

	}

}
