import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product' ; 
import {ProductService} from '../../services/product.service' ; 

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

	private productsList : Product[] ; 

  	constructor(private productService : ProductService) { }

  	getProductsList() {
  		this.productService.getProductList().subscribe(
			(res : Product[]) => {
				this.productsList = res ; 
			},  
			error => {
				console.log(error); 
			}	  	  
  		) ;
  	}

  	addToListShoppingList(product) {
  		/* code a decommenter quand la partie back est prete
  		this.productService.addToShoppingList(product).subscribe(
  			res => {
				console.log(res);
			},  
			error => {
				console.log(error); 
			}	
  		);
  		*/
  	}

	ngOnInit() {
		// ce qu'il faut faire : 
		//this.getProductsList(); 

		//juste pour le teste, le temps la fonctionnalite backend soit prete :
		let product1 = new Product(); 
		product1.nom = "Produit 1" ; 
		product1.prix = 4.99 ;
		let product2 = new Product(); 
		product2.nom = "Produit 2" ; 
		product2.prix = 2.71 ;
		let product3 = new Product(); 
		product3.nom = "Produit 3" ; 
		product3.prix = 1.00 ;		
		let product4 = new Product(); 
		product4.nom = "Produit 4" ; 
		product4.prix = 3.00 ;
		let product5 = new Product(); 
		product5.nom = "Produit 5" ; 
		product5.prix = 0.99 ;
		let product6 = new Product(); 
		product6.nom = "Produit 6" ; 
		product6.prix = 2.85 ;
		let product7 = new Product(); 
		product7.nom = "Produit 7" ; 
		product7.prix = 4.5 ;	

		this.productsList = [product1,product2,product3,product4,product5,product6,product7] ; 

	}

}
