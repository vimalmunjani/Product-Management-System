import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = 'Product List';
  products: Product[] = [
    {
      productId:  1,
      productName: "8 GB RAM",
      productCode: "RAM-008-GB",
      releaseDate: "March 19, 2016",
      category : "CPU Parts",
      description: "DDR3 RAM",
      price: 1500,
      starRating: 3.2,
      imageUrl: "https://someram.png"
    }
  ]

  
  constructor() { }

  ngOnInit() {

  }

}
