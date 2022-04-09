import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/general.service';
import { Customer, Invoice, Service, Stylist } from 'src/app/gTypes';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-business-record',
  templateUrl: './business-record.component.html',
  styleUrls: ['./business-record.component.scss']
})
export class BusinessRecordComponent implements OnInit {

  services:Service[];
  selectedService:Service;

  stylists:Stylist[];
  selectedStylist:Stylist;

  customers:Customer[];
  selectedCustomer:Customer;

  invoices:Invoice[] = [];

  data_loaded:boolean =false;

  constructor(private generalService:GeneralService, public confirmService:ConfirmationService) { 

    this.amount = 0;
    this.services = [];
    this.selectedService = {} as Service;
    this.stylists = [];
    this.selectedStylist = {} as Stylist;

    this.customers = [];
    this.selectedCustomer = {} as Customer;

    this.generalService.getDataLoadingInformer().subscribe((state:boolean) => {
     if(state){
      setTimeout(()=> {
         this.data_loaded = state;
      }, 300)
    }else{
      this.data_loaded = state;
    }
    })

    this.generalService.bringServiceTypes().subscribe((s:any) => {
      console.log(s)
        this.services = s;
    });

    

    this.generalService.bringInvoices().subscribe((invoice:any) => {
      this.invoices = invoice;
      this.generalService.markDataLoaded();
      
    })

    

    this.generalService.bringStylists().subscribe((stylists:any) => {
      this.stylists = stylists;
      this.selectedStylist = this.stylists[0];
    })

    this.generalService.bringCustomers().subscribe((customers:any) => {
      this.customers = customers;
      this.selectedCustomer = this.customers[0];
    })
  }

  ngOnInit(): void {

    
  }

  amount:number;

  saveInvoice():void{
    let invoice:Invoice = {
      customer:this.selectedCustomer.flname,
      stylist:this.selectedStylist.flname,
      amount:this.amount,
      customerId: this.selectedCustomer.id,
      stylistId:this.selectedStylist.id,
      serviceType:this.selectedService.id,
      createdAt: new Date()
    } as Invoice;

    
    console.log(invoice);
    this.generalService.addInvoice(invoice);
    this.amount = 0;
    this.generalService.markDataloading();
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
    
        return this.invoices ? this.first === (this.invoices.length - this.rows): true;
    }

    isFirstPage(): boolean {
     
        return this.invoices ? this.first === 0 : true;
    }

    removeRecord(event:any,invoice:Invoice){

      this.confirmService.confirm({
        target: event.target,
        message: 'Delete business record?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => { 
          this.generalService.deleteInvoice(invoice.id)
            //confirm action
        },
        reject: () => {
            //reject action
        }
    });

     
    }

}
