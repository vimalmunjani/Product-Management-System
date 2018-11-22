import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stock-status',
  templateUrl: './stock-status.component.html',
  styleUrls: ['./stock-status.component.css']
})
export class StockStatusComponent implements OnInit {

  inStock: boolean;
  lowStock: boolean;
  outOfStock: boolean;

  @Input('avail') available: number;
  @Input('th') threshold: number;

  constructor() {

  this.inStock = false;
  this.lowStock = false;
  this.outOfStock = false;

  this.available = 0;
  this.threshold = 5;

   }

  ngOnInit() {
  
    if (this.available  === 0) {
      this.inStock = false;
      this.lowStock = false;
      this.outOfStock = true;
    } else if (this.available > this.threshold) {
        this.inStock = true;
        this.lowStock = false;
        this.outOfStock = false;
    } else if (this.available <= this.threshold) {
        this.inStock = false;
        this.lowStock = true;
        this.outOfStock = false;
    }
    

  }

}
