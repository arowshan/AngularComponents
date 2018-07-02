import { Component, OnInit } from '@angular/core';

import { HttpClientService } from '../http-client/http-client.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private httpService?: HttpClientService) { }


  ngOnInit() {

    //START Http Service Demo
    const url = 'https://2i5vyjsax1.execute-api.us-east-1.amazonaws.com/Prod';
    const params = {key1: 'abc'}
    this.httpService.post(url, params).subscribe(
      res => console.log(res)
    );
    //END Http Service Demo



  }

}
