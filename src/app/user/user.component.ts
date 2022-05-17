import { Component, OnInit } from '@angular/core';
import { UserprofileService } from '../userprofile.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private user: UserprofileService) { 
    
  }

  ngOnInit(): void {
    let key=this.user.getAdress();
    let key2=this.user.getCompanyName();
    console.log(key);
    console.log(key2);
  }

}
