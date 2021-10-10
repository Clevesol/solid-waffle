import { Component, OnInit } from '@angular/core';
import {Subject,Observable} from 'rxjs';
import { GeneralService } from 'src/app/general.service';
import { Service } from 'src/app/gTypes';
import { ModalService } from 'src/app/modal.service';

@Component({
  selector: 'app-manual-business-record-modal',
  templateUrl: './manual-business-record-modal.component.html',
  styleUrls: ['./manual-business-record-modal.component.scss']
})
export class ManualBusinessRecordModalComponent implements OnInit {
    services:Service[];
    selectedService:Service;
    show_new_manual_record_modal:boolean;

    constructor(private generalService:GeneralService, private modalServise:ModalService) {

   
    this.services = [];
    this.selectedService = {} as Service;

    this.show_new_manual_record_modal = false; 
    this.generalService.bringServiceTypes().subscribe((s:any) => {
        this.services = s;
    });

    this.modalServise.getManualRecordAddModel().subscribe((s:any) => {
      this.show_new_manual_record_modal = !this.show_new_manual_record_modal;
      console.log('modal should popup now')
    })
   }

  ngOnInit(): void {
  }


  

}
