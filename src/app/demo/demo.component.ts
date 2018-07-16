import { Component, OnInit } from '@angular/core';

import { HttpClientService } from '../http-client/http-client.service';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  data;

  constructor(private httpService?: HttpClientService, private commonService?: CommonService) { }


  ngOnInit() {

    //START Http Service Demo
    const url = 'http://httpbin.org/post';
    const params = {key1: 'abc'}
    this.httpService.post(url, params).subscribe(
      res => console.log(res)
    );
    //END Http Service Demo

    this.commonService.getAsyncData().then(data => this.data = data);

  }

  getSomething() {
    return this.commonService.getValue1();
  }

}
