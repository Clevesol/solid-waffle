import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  items: MenuItem[] ;
  breadcumbitems: MenuItem[];
  breadcumbhome:MenuItem;
  isAuthenticatedB:boolean = false;

  ngOnInit(){

  }
  constructor(public authService:AuthService) {
      this.items = [
        {label: 'Home', icon: 'pi pi-fw pi-home', routerLink:'/'},
        {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
        {label: 'Settings', icon: 'pi pi-fw pi-cog'},
        {label: 'Log Out', icon: 'pi pi-power-off', routerLink: 'logout'}
      ];

      this.breadcumbitems = [
       
    ];
    
    this.breadcumbhome = {icon: 'pi pi-home', routerLink: '/'};

    this.authService.getLogState().subscribe(s => {
      this.isAuthenticatedB = this.authService.isAuthenticated();
    })
   
  }

  


}
