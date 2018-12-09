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
  	private httpParams : HttpParams, 
  	private cookieService : CookieService) { }


	getProductList() {
		let url = AppConst.serverPath+"product/getProductList";
		let params = new HttpParams(); 
		params.append("listId" , this.cookieService.get("listId"));
		return this.http.get(url,{params}) ;

	}

	addToShoppingList(product: Product) {
		let url = AppConst.serverPath+"product/addToShoppingList";
  		return this.http.post(url, product);		
		
	}
}
