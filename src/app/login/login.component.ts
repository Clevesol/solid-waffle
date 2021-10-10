import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { AuthService } from '../auth.service';
import { User } from '../gTypes';
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


  constructor(public authService:AuthService, private router:Router) {

    this.user = {
      username: '',
      password:''
    }


    this.authService.getLogState().subscribe(s => {
      if(this.authService.isAuthenticated()){
        router.navigate(['/']);
      }
    })
    // var registerUser = window.localStorage.getItem('register_user');
    // var signed = window.localStorage.getItem('signed');

    // if(registerUser && !signed){
    //     this.auth.createUserWithEmailAndPassword('jude.shameera@gmail.com','test@pass123').then((response)=> {
    //       window.localStorage.setItem('signed','true');
    //     })
    // }else{
    //   console.log('ignoring user creation');
    // }


   }





  ngOnInit(): void {
  }



  login(): void{

    this.load(1);
    this.authService.login(this.user);
    this.user = {} as User;
  }


}


