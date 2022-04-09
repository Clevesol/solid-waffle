import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(public authService:AuthService, public router:Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.authService.logout()

        this.authService.getLogState().subscribe(s => {
            if(!this.authService.isAuthenticated()){
                this.router.navigate(['login'])
            }
        });
  }

}
