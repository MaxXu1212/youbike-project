import { ActivatedRoute, Router } from '@angular/router';

import { Component, OnInit , Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DataService } from './data.service';
import { getSyntheticLeadingComments } from 'typescript';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit, OnChanges {
  @Input()
  change:any
  data:any
  selectvalue:any

  dataForm: FormGroup = new FormGroup({
    sarea: new FormControl('')
  })
  constructor(public datasvc: DataService, public router:Router,public route:ActivatedRoute ) {
    this.change = this.route.snapshot.queryParams["change"];
    this.getchange()

  }
  ngOnInit(): void {

  }
  displayedColumns: string[] = ['sna', 'sarea', 'ar', 'sbi', 'bemp'];

  items = [
    {value:0 , label:"大安區"},
    {value:1 , label:"士林區"},
    {value:2 , label:"大同區"},
    {value:3 , label:"中山區"},
    {value:4 , label:"中正區"},
    {value:5 , label:"內湖區"},
    {value:6 , label:"文山區"},
    {value:7 , label:"北投區"},
    {value:8 , label:"松山區"},
    {value:9 , label:"信義區"},
    {value:10 , label:"南港區"},
    {value:11 , label:"萬華區"},
    {value:12 , label:"臺大專區"},

  ]

  changeSelect(event:any){
      this.selectvalue = this.data.filter((svalue:any) => {
        if(svalue.sarea === event.value){
          return svalue
        }
      })

  }
  roadSearch(event:any){
    this.selectvalue = this.data.filter((svalue:any)=>{
      if(svalue.ar.indexOf(event)!=-1){
        return svalue
      }
    })
  

  }

  ngOnChanges(): void {

 }

 getchange(){
  this.data = new Array
  if(this.change === 'true'){
    this.datasvc.getdata().subscribe((result:any)=>{
      this.data = result
    })
  }
  else{
    this.data = new Array
    this.datasvc.getdata1().subscribe((result:any)=>{
      Object.keys(result.retVal).forEach((k:any)=>{
       this.data.push(JSON.parse(JSON.stringify(result.retVal[`${k}`])))
      })

  })


}
 }









}
