import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { BaseConfigService } from '../base-config.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  myapidata: any;

  constructor(private myHttp: HttpClient) {
  }

  ngOnInit(): void {
    this.myHttp.get("https://reqres.in/api/users?page=2").subscribe(
      (mydata) => { this.myapidata = mydata }
    );

  }

}
