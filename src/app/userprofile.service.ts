import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  constructor() { }

  getAdress()
  {
    let address=
    {
      area: 'baner',
      pincode: 416408,
      locality: 'tower'
    };
  }

  getCompanyName()
  {
    return 'T-Systems ict india pvt ltd '
  }
}
