
export class Global{
   public static services = 'services';
   public static invoices = 'invoice';
   public static stylists = 'stylist';
   public static customers = 'customer';
}


export  interface Service{

    id:string;
    name:string;
    charge:number;
    service_unit:string;
    offered:number;
}

export interface Invoice{
    id:string,
    amount:number;
    customer:string;
    stylist:string;
    customerId:string,
    stylistId:string;
    serviceType:string;
    createdAt:Date;
}

export interface Stylist{
    id:string,
    fname:string;
    lname:string;
    number:string;
    flname:string;
}

export interface Customer{
    id:string,
    fname:string;
    lname:string;
    number:string;
    flname:string;

}

export interface User{

    username:string;
    password:string;
  
  }