import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss']
})
export class PosComponent implements OnInit {

  events: any[];

    options: any;

    header: any;

    constructor(private eventService: EventService) {
      this.events = [];
     }

    ngOnInit() {
        this.eventService.getEvents().subscribe((events:any) => {
            this.events = events;
            this.options = {...this.options, ...{events: events}};
        });

        this.options = {
                initialDate : '2019-01-01',
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                editable: true,
                selectable:true,
                selectMirror: true,
                dayMaxEvents: true
        };
    }

}
