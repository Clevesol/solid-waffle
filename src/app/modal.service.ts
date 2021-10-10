import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  private manualRecordAddModal = new Subject();

  getManualRecordAddModel():Observable<any>{
    return this.manualRecordAddModal.asObservable();
  }

  showManualBusinessRecordModal():void{
      console.info('showing modale')
      this.manualRecordAddModal.next(true);
  }
}
