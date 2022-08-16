
import { Component, EventEmitter, OnInit , Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../body/data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  change:boolean = true
  data:any

  constructor(public router:Router, public route: ActivatedRoute) { }

  ngOnInit(): void {


  }

  Passchange(){
    this.change = false
    this.router.navigate(['/body'],{queryParams:{ change:this.change}})
  }
  Default(){
    this.router.navigate(['/body'],{queryParams:{change:this.change}})
  }


  }





