import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import {AppConst} from '../constants/app-const' ; 
import {Product} from '../models/product' ; 
import {CookieService} from 'angular2-cookie/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient,
  	private cookieService : CookieService) { }
/*
  	createFavorites() {
		let url = this.serverPath+ "movie/createFavoritesMoviesList";
		let tokenHeader = new HttpHeaders({
			'Content-Type' : 'application/json',
		});
		let infos = {
			"id": movie.id,
			"title" : movie.title, 
			"MoviesListId" : this.cookieService.get("MoviesListId")
  		}

		return this.http.post(url, JSON.stringify(infos), {headers : tokenHeader,responseType:'text'});		

		return this.http.get<string>(url,{headers: tokenHeader}); 	
	}
*/

	getProductList() {
		let url = AppConst.serverPath+"product/getProductsList";
		return this.http.get<Product[]>(url) ;

	}

	addToShoppingList(product: Product) {
		let url = AppConst.serverPath+"product/getProductsList";
		let infos = {
			"productId": product.id,
			"listId" : this.cookieService.get("listId")
  		}
  		return this.http.post(url, JSON.stringify(infos), {responseType:'text'});		
		
	}
}
