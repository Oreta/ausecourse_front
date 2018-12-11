import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service' ;
import {User} from '../../models/user' ; 
import {CookieService} from 'angular2-cookie/core';


@Component({
  selector: 'app-livreurs',
  templateUrl: './livreurs.component.html',
  styleUrls: ['./livreurs.component.css']
})
export class LivreursComponent implements OnInit {
	private livreurTest = new User(); 
	private livreurs : User[] ; 
	private currentUser : User ; 

  constructor(private userService : UserService,
    private cookieService : CookieService) { }

  // en parametre le user qui est le client
  // la liste qui est retournee, contient les users qui sont des livreurs au fait
  getAvailableLivreurs(user : User){
  	this.userService.getAvailableLivreurs(user).subscribe(
      (res:User[]) => {
        this.livreurs = res ; 
      },
      error => {
        console.log(error);      
      }  		
  	);
  }

  onNotifyLivreur(livreur: User) {
  	//notify livreur 
    this.userService.notifyLivreur(livreur.id,this.currentUser.id)//this.cookieService.get("listId"));
  	window.location.href = "http://localhost:4200/payment" ;
  }


  ngOnInit() {

  	this.livreurTest.id = "1"; 
  	this.livreurTest.username = "aymane" ; 
  	this.livreurTest.password = "123" ;

  	//utilise l'ancien module http ! res.json() est normal 
  	
  	this.userService.getCurrentUser().subscribe(
      res => {
        this.currentUser = res.json(); 
        this.getAvailableLivreurs(this.currentUser);
      },
      error => {
        console.log(error);
      }     
  	);  	
  	

  }

}
