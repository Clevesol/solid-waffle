import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {map} from 'rxjs/operators';
import { Observable,Subject } from 'rxjs';
import { Service,Global, Invoice, Stylist, Customer } from './gTypes';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {


  private dataLoading = new Subject();

  markDataloading():void{
    this.dataLoading.next(false);
  }

  markDataLoaded():void{
    this.dataLoading.next(true);
  }

  getDataLoadingInformer():Observable<any>{
    return this.dataLoading.asObservable();
  }
 
  bringCustomers():Observable<Customer> {
    return this.mapSnaps(Global.customers)
    .pipe(
      map((customers:any) => {
        return customers.map((snap:any) => {
          return <Stylist> {
            flname : snap.fname +' '+ snap.lname,
            ...snap
          }
        })
      })
    );
  }

  constructor(private db:AngularFirestore) { }

  public bringServiceTypes():Observable<Service>{
      return this.mapSnaps(Global.services);
  }

  public bringStylists():Observable<Stylist>{
    return this.mapSnaps(Global.stylists).pipe(
      map((customers:any) => {
        return customers.map((snap:any) => {
          return <Stylist> {
            flname : snap.fname +' '+ snap.lname,
            ...snap
          }
        })
      })
    );
  }


  public bringInvoices():Observable<Invoice>{
    return this.mapSnapsDateFilter(Global.invoices, new Date().toLocaleDateString());
  }

  private mapSnaps(collection:string):Observable<any>{

    
    return this.db.collection(collection).snapshotChanges().pipe(
      map((snaps:any) => {
        return snaps.map((snap:any) => {
          return <any>{
            id: snap.payload.doc.id,
            ...snap.payload.doc.data()
          }
        })
      })
    )
  }

  private mapSnapsDateFilter(collection:string, date:string):Observable<any>{


    return this.db.collection(collection, ref => ref.where('createdAt','>', new Date(date)
    )).snapshotChanges().pipe(
      map((snaps:any) => {
        return snaps.map((snap:any) => {
          return <any>{
            id: snap.payload.doc.id,
            ...snap.payload.doc.data()
          }
        })
      })
    )
  }


  public addInvoice(invoice:Invoice):void{
      this.db.collection<Invoice>(Global.invoices).add(invoice);
  }

  public deleteInvoice(invoiceId:string){
    this.db.collection<Invoice>(Global.invoices).doc(invoiceId).delete();
  }

  deleteCustomer(id: string) {
    this.db.collection<Customer>(Global.customers).doc(id).delete();
  }
  addCustomer(customer: Customer) {
    this.db.collection<Customer>(Global.customers).add(customer);
  }

  deleteStylist(id: string) {
    this.db.collection<Stylist>(Global.stylists).doc(id).delete();
  }
  addStylist(customer: Stylist) {
    this.db.collection<Stylist>(Global.stylists).add(customer);
  }

}
