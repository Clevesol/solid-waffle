import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/general.service';
import { Invoice } from 'src/app/gTypes';

@Component({
  selector: 'app-daily-overview',
  templateUrl: './daily-overview.component.html',
  styleUrls: ['./daily-overview.component.scss']
})
export class DailyOverviewComponent implements OnInit {


  colorpalates:any = [
    "#42A5F5",
    "#66BB6A",
    "#d62d20",
    "#0057e7",
    "#008744",
    "#66BB6A",
    "#ffa700",
    "#66CC6A"
  ];

  

  visible:boolean = false;
  constructor(private generalService:GeneralService) {

    this.data = {
      labels: ['Jude','Perera'],
      datasets: [
          {   
              data: [50, 300],
              backgroundColor: [
                  "#42A5F5",
                  "#66BB6A"
              ],
              hoverBackgroundColor: [
                  "#64B5F6",
                  "#81C784"
              ]
          }
      ]
  };


    this.generalService.getDataLoadingInformer().subscribe((state:boolean)=> {
        
      
      setTimeout(()=> {
        this.visible = state;
     }, 100)
      
    })
   
    this.generalService.bringInvoices().subscribe( (invoices:any) => {
        this.generalService.markDataloading();
        this.data.labels = [];
        this.data.datasets = [];

        let dataMap:Map<string,any> = new Map();
      let amount = 0;
      invoices.forEach((invo:Invoice) => {
           amount += dataMap.get(invo.stylist)? invo.amount+ parseInt(dataMap.get(invo.stylist)):invo.amount;
          dataMap.set(invo.stylist, amount);
          amount = 0
        });

        this.data.labels = Array.from(dataMap.keys());
         let pieData:pieData = {} as pieData;

        pieData.data = [];
        pieData.backgroundColor = [];
        pieData.hoverBackgroundColor = [];
        this.data.labels.forEach((label:string,index:number) => {
          pieData.data.push(dataMap.get(label))
          pieData.backgroundColor.push(this.colorpalates[index])
          pieData.hoverBackgroundColor.push(this.colorpalates[index])
        })
        this.data.datasets.push(pieData);
        this.generalService.markDataLoaded();
       
    })

   }

  data:dataClass;

  ngOnInit(): void {
  }

  

}

interface dataClass {
  labels:string[],
  datasets: pieData[]
}

interface pieData{
  data:number[], 
  backgroundColor:string[],
  hoverBackgroundColor:string[]
}