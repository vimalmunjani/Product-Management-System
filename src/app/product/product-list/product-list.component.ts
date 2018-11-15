import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = 'Product List';
  showImage: boolean = false;
  filterText: string = 'i am a fliter text';
  products: Product[] = [
    {
      productId:  1,
      productName: "8 GB RAM",
      productCode: "RAM-008-GB",
      releaseDate: "March 19, 2016",
      category : "CPU Parts",
      description: "DDR3 RAM",
      available: 5,
      price: 1500,
      starRating: 3.2,
      imageUrl: "https://images10.newegg.com/ProductImageCompressAll1280/20-148-679-02.jpg"
    }
  ]

  
  constructor() { }

  ngOnInit() {

  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  showDescription(productDescription) {

  }

}
