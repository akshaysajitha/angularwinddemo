import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
