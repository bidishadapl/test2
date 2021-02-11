import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'test1';
  name;
  email;
  li:any; 
  mode = 1;
  no;
  exp;
  code;
  selectclass = 1;
  list=[]; 
  showData='No';
  msg;
  constructor(
  ){}

  ngOnInit(){

  }
  
  myFunc(){
	  if(!this.name)
	  alert('Name required');
	  
	  if(!this.email)
	  alert('Email required');
	  
	  if (this.name && this.email){
	  this.mode = 2;
	  }
	}
	
	
	myFunc2(){
	  if(!this.no)
	  alert('Card number required');
	  
	  if(!this.exp)
	  alert('Expiry date required');
	  
	  if(!this.name)
	  alert('Name required');
	  
	  if(!this.code)
	  alert('Code required');
	  
	  if (this.no && this.name && this.exp && this.code){
	  this.mode = 3;
	  }
	}
	
}