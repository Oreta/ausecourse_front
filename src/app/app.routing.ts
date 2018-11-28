import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router' ; 
import {LoginComponent} from './components/login/login.component'; 
import {HomeComponent} from './components/home/home.component'; 

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

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);