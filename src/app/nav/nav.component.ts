import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  items: MenuItem[] ;
  breadcumbitems: MenuItem[];
  breadcumbhome:MenuItem;

  ngOnInit(){

  }
  constructor() {
      this.items = [
        {label: 'Home', icon: 'pi pi-fw pi-home'},
        {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
        {label: 'Settings', icon: 'pi pi-fw pi-cog'}
      ];

      this.breadcumbitems = [
        {label: 'Computer'},
        {label: 'Notebook'},
        {label: 'Accessories'}
    ];
    
    this.breadcumbhome = {icon: 'pi pi-home', routerLink: '/'};
  }

}
