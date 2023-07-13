import { Component } from '@angular/core';
import {Router} from "@angular/router"
import { Catagories } from 'src/app/catagories';
import { CatagoriesService } from 'src/app/catagories.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  catagories:Catagories [] = []
constructor(public router:Router,private catagoriesService:CatagoriesService){}
  ngOnInit(){
    this.catagoriesService.getCatagories().subscribe({
      next:(data)=>{
        this.catagories=data
      }
    });
  }
}
