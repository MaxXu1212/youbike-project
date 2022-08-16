import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor(public http:HttpClient) { }

  getdata(){
    return this.http.get('https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json')
  }

  getdata1(){
    return this.http.get('https://tcgbusfs.blob.core.windows.net/blobyoubike/YouBikeTP.json')
  }

  getaccount(){
    return this.http.get('https://account-and-password-default-rtdb.firebaseio.com/.json')
  }







}
