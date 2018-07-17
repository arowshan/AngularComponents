import { Component, OnInit } from '@angular/core';

import { HttpClientService } from '../http-client/http-client.service';
import { CommonService } from '../common/common.service';
import { single } from './data';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  //NGX Bar Chart
  single: any[];
  multi: any[];
  view: any[] = [700, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  //END of NGX Bar Chart

  constructor(private httpService?: HttpClientService, private commonService?: CommonService) {
    this.single = single;
   }


  ngOnInit() {

    //START Http Service Demo
    const url = 'http://httpbin.org/post';
    const params = {key1: 'abc'}
    this.httpService.post(url, params).subscribe(
      res => console.log(res)
    );
    //END Http Service Demo

    // this.commonService.getAsyncData().then(data => this.data = data);

  }

  getSomething() {
    return this.commonService.getValue1();
  }

  onSelect(event) {
    console.log(event);
  }

}
