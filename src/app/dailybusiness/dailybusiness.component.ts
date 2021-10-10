import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { GeneralService } from '../general.service';
import { Service } from '../gTypes';
import { ModalService } from '../modal.service';
import {ConfirmationService} from 'primeng/api'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dailybusiness',
  templateUrl: './dailybusiness.component.html',
  styleUrls: ['./dailybusiness.component.scss']

})

export class DailybusinessComponent implements OnInit {

  
    

    
    multiAxisOptions: any;


    data:any;

    multiAxisData: any;

    date6:any;

    today:any;

    l_usr:string;

    def_top_menu_items:MenuItem[];

    

    update():void{

    }

    delete():void{

    }
   
   
   
    constructor(public router:Router,private modalService:ModalService, confirmService:ConfirmationService, public authService:AuthService){
        this.l_usr = 'Shameera';
        this.def_top_menu_items = [];
      
    }

    logout():void{
        this.authService.logout()

        this.authService.getLogState().subscribe(s => {
            if(!this.authService.isAuthenticated()){
                this.router.navigate(['login'])
            }
        });
    }
    
    ngOnInit() {
      
        this.today = Date.now();
        
      this.multiAxisData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Jude Sameera',
            fill: false,
            borderColor: 'primary',
            yAxisID: 'y',
            tension: .4,
            data: [65, 59, 80, 81, 56, 55, 10]
        }, {
            label: 'Jude Perera',
            fill: false,
            borderColor: '#c0bc7e',
            yAxisID: 'y1',
            tension: .4,
            data: [28, 30, 40, 29, 86, 37, 86]
        }, {
          label: 'Stylist 1',
          fill: false,
          borderColor: '#00cb7e',
          yAxisID: 'y1',
          tension: .4,
          data: [28, 48, 40, 19, 86, 27, 90]
      }]
    };
    

        this.multiAxisOptions = {
            stacked: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        drawOnChartArea: false,
                        color: '#ebedef'
                    }
                }
            }
        };

   

        


      this.def_top_menu_items = [
        {label: 'Update', icon: 'pi pi-refresh', command: () => {
            this.update();
        }},
        {label: 'Delete', icon: 'pi pi-times', command: () => {
            this.delete();
        }},
        {label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'},
        {separator: true},
        {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
    ];

       
        
    }

    
   
    loadServices(){

    }

    show_modal():void{
        this.modalService.showManualBusinessRecordModal();
    }

}
