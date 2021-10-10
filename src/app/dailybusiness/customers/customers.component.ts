import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { GeneralService } from 'src/app/general.service';
import { Customer } from 'src/app/gTypes';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers:Customer[];
  selectedCustomer:Customer;

  fname:string = '';
  lname:string = '';
  number:string = '';

  constructor(private generalService:GeneralService,public confirmService:ConfirmationService) { 
  
    this.customers = [];
    this.selectedCustomer = {} as Customer;

    this.generalService.bringCustomers().subscribe((customers:any) => {
      this.customers = customers;
      this.selectedCustomer = this.customers[0];
    })
  }

  ngOnInit(): void {

    
  }


  saveCustomer():void{
    let customer:Customer = {
      fname : this.fname,
      lname : this.lname,
      flname : this.fname+' '+this.lname,
      number : this.number
    } as Customer;

    this.generalService.addCustomer(customer);
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
        return this.customers ? this.first === (this.customers.length - this.rows): true;
    }

    isFirstPage(): boolean {
        return this.customers ? this.first === 0 : true;
    }

    removeRecord(event:any,customer:Customer){

      this.confirmService.confirm({
        target: event.target,
        message: 'Delete customer '.concat(customer.flname).concat(' ?'),
        icon: 'pi pi-question-circle',
        accept: () => { 
          this.generalService.deleteCustomer(customer.id)
        },
        reject: () => {
            //reject action
        }
    });

      
    }

}
