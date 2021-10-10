import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { GeneralService } from 'src/app/general.service';
import { Customer, Stylist } from 'src/app/gTypes';
@Component({
  selector: 'app-stylists',
  templateUrl: './stylists.component.html',
  styleUrls: ['./stylists.component.scss']
})
export class StylistsComponent implements OnInit {


  stylists:Customer[];
  selectedCustomer:Customer;

  fname:string = '';
  lname:string = '';
  number:string = '';

  ngOninit(){

  }

  constructor(private generalService:GeneralService,public confirmService:ConfirmationService) { 
  
    this.stylists = [];
    this.selectedCustomer = {} as Customer;

    this.generalService.bringStylists().subscribe((stylists:any) => {
      this.stylists = stylists;
      this.selectedCustomer = this.stylists[0];
    })
  }

  ngOnInit(): void {

    
  }


  saveStylist():void{
    let stylist:Stylist = {
      fname : this.fname,
      lname : this.lname,
      flname : this.fname+' '+this.lname,
      number : this.number
    } as Stylist;

    this.generalService.addStylist(stylist);
    this.fname = '';
    this.lname = '';
    this.number = '';
  }

    first = 0;

    rows = 10;



    next() {
        this.first = this.first + this.rows;
    }

    prev() {
        this.first = this.first - this.rows;
    }

    reset() {
        this.first = 0;
    }

    isLastPage(): boolean {
        return this.stylists ? this.first === (this.stylists.length - this.rows): true;
    }

    isFirstPage(): boolean {
        return this.stylists ? this.first === 0 : true;
    }

    removeRecord(event:any,stylist:Stylist){

      this.confirmService.confirm({
        target: event.target,
        message: 'Delete stylist '.concat(stylist.flname).concat(' ?'),
        icon: 'pi pi-question-circle',
        accept: () => { 
          this.generalService.deleteStylist(stylist.id)
        },
        reject: () => {
            //reject action
        }
    });

      
    }

}


