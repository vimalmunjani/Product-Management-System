import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  pageTitle: string = 'Product List';
  showImage: boolean = false;
  filterText: string;
  filteredProducts: Product[]; 
  products: Product[];

  filterChanged(value: string) {
    this.filteredProducts = (value) ? this.performFilter(value) : this.products
  }

  performFilter(value: string): Product[] {

    return this.products.filter((p) => {
      return  p.productName.trim().toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !== -1;
    });

  }
  
  constructor(private productService : ProductService) { }

  ngOnInit() {

    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.filteredProducts = this.products;
    });

    // this.products =  this.productService.getProducts();

  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  showDescription(productDescription) {

  }

}
