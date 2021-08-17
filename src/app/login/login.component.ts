import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:User;

  loading = [false, false, false, false]

  load(index:number) {
      this.loading[index] = true;
      setTimeout(() => this.loading[index] = false, 1000);
  }


  constructor() {

    this.user = {
      username: '',
      password:''
    }
   }



  ngOnInit(): void {
  }

}

interface User{

  username:string;
  password:string;

}
