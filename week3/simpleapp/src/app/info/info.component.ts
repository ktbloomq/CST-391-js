import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  quantity = 0;
  products: string[] = [];
  selectedProduct = "Star Wars";
  @Input() name: string = "undefined";

  constructor() {}

  ngOnInit() {
    this.quantity = 0;
    this. products = ["Star Wars", "The Empire Stricks Back", "Return of the Jedi"];
    this.selectedProduct = "Star Wars";
  }

  newInfo() {
    this.quantity = 0;
    this. products = ["Star Wars", "The Empire Stricks Back", "Return of the Jedi"];
    this.selectedProduct = "Star Wars";
    console.log("In newInfo() and resetting Info");
  }

  onSubmit() {
    console.log("In onSubmit() with a quantity of " + this.quantity + " and movie selected is " + this.selectedProduct);
  }
}
