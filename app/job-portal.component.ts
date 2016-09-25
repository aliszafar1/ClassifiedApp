import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
	templateUrl: 'app/jobs.html',
	directives: [ROUTER_DIRECTIVES],
	styleUrls: ['app/job-portal-style.css']
})

export class JobPortalComponent{
	public cars =[
	{
		name: "Honda",
		model: "2009",
		price: "Rs. 100k"
	},
	{
		name: "Toyota",
		model: "2008",
		price: "Rs. 150k"
	},
	{
		name: "Mercedes Benz",
		model: "2010",
		price: "Rs. 250k"
	}
	];

	public mobiles = [
	{
		name: "Samsung",
		model: "S4",
		price: "Rs. 15k"
	},
	{
		name: "Apple",
		model: "i5",
		price: "Rs. 45k"
	},
	{
		name: "HTC",
		model: "10c",
		price: "Rs. 18k"
	}];

	public laptops = [
	{
		name: "Hp",
		model: "Pavailion",
		price: "Rs. 35k" 
	},
	{
		name: "Sony",
		model: "Vaio",
		price: "Rs. 65k" 
	},
	{
		name: "Apple",
		model: "Macbook Pro",
		price: "Rs. 135k" 
	}
	];
}