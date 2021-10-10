import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MessageService } from 'primeng/api';
import { Observable, Subject } from 'rxjs';
import { User } from './gTypes';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
    logout() {
       this.af.signOut()
    }

  private authState:any = null;

  private logStateChange = new Subject();

  isAuthenticated(): boolean {
    return this.authState !== null;
  }

  constructor(public af:AngularFireAuth,public messageService:MessageService) {

    af.authState.subscribe(state => {
      this.authState = state;
      this.logStateChange.next()
    });
   }

   login(user:User):void{

    this.af.signInWithEmailAndPassword(user.username, user.password).then((res) => {
      this.messageService.add({severity:'success', summary:'Login Success', detail:'successfull login'});
      setTimeout(()=>{
        this.messageService.clear()
      },1300)
    }).catch((err)=> {
      this.messageService.add({severity:'error', summary:'Login Failed', detail:'Invalid login'});
      setTimeout(()=>{
        this.messageService.clear()
      },1300)
    });
   }

   getLogState():Observable<any>{
     return this.logStateChange.asObservable();
   }

}
