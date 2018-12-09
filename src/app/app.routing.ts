import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router' ;
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {DisplayAccountComponent} from './components/display-account/display-account.component';
import {ModifAccountComponent} from './components/modif-account/modif-account.component';
import {ListeCourseComponent} from './components/liste-course/liste-course.component' ;
import {LivreursComponent} from './components/livreurs/livreurs.component' ; 
import {PaymentComponent} from './components/payment/payment.component' ;
import {OrdersComponent} from './components/orders/orders.component' ;

const appRoutes: Routes = [
	{
		path : '' ,
		redirectTo: '/' ,
		pathMatch: 'full'
	},
	{
		path: 'login' ,
		component: LoginComponent
	},
	{
		path: 'home' ,
		component: HomeComponent
	},
	{
		path: 'displayAccount' ,
		component: DisplayAccountComponent
	},
	{
		path: 'modifAccount' ,
		component: ModifAccountComponent
	},
	{
		path: 'course' ,
		component: ListeCourseComponent
	},
	{
		path: 'livreurs' ,
		component: LivreursComponent
	},
	{
		path: 'payment' ,
		component: PaymentComponent
	},
	{
		path: 'orders' ,
		component: OrdersComponent
	},


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
