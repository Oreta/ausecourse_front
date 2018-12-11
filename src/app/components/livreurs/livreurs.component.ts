import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service' ;
import {ProductService} from '../../services/product.service' ;
import {User} from '../../models/user' ; 
import {CookieService} from 'angular2-cookie/core';
import {Order} from '../../models/order' ; 
import {ListeCourse} from '../../models/ListeCourse' ; 
import {OrderService} from '../../services/order.service' ;

@Component({
  selector: 'app-livreurs',
  templateUrl: './livreurs.component.html',
  styleUrls: ['./livreurs.component.css']
})
export class LivreursComponent implements OnInit {
	private livreurTest = new User(); 
	private livreurs : User[] ; 
	private currentUser : User ; 
  private listCourse : ListeCourse ; 

  constructor(private userService : UserService ,
    private orderService : OrderService , 
    private productService : ProductService ,
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
    let order = new Order(); 
    order.clientID = this.currentUser.id ; 
    order.livreurId = livreur.id;  
    order.listeCourse = this.listCourse ;
    this.userService.notifyLivreur(order).subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);      
      }      
    );//this.cookieService.get("listId"));
  	window.location.href = "http://localhost:4200/orders" ;
  }


  ngOnInit() {

  	this.livreurTest.id = "1"; 
  	this.livreurTest.username = "aymane" ; 
  	this.livreurTest.password = "123" ;

  	//utilise l'ancien module http ! res.json() est normal 
  	
  	this.userService.getCurrentUser().subscribe(
      res => {
        this.currentUser = res.json(); 
        this.productService.getProductList().subscribe(
          (res:ListeCourse) => {
            this.listCourse = res ; 
          },
          error => {
            console.log(error);      
          }                
        );
        this.getAvailableLivreurs(this.currentUser);
      },
      error => {
        console.log(error);
      }     
  	);  	
  	

  }

}
