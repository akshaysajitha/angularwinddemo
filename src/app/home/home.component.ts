import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'home';
  name:string=''
  email:string=''
  phnumber:string=''
  address:string=''
  formsubmit(){
    console.log('name:'+this.name)
    console.log('email:'+this.email)
    console.log('phnumber:'+this.phnumber)
    console.log('address:'+this.address)
    
    console.log('formsubmit')

  }

}
