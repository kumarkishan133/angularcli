import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  pageTitle: string="Data binding in angular";
  pageTitle1: string="interpolation{{}}";
  imageUrl:string="assets/image/frame-harirak-565644-unsplash.jpg";
  btnStatus:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
 changeTitle(){
  this.pageTitle="data binding";
 }

}
