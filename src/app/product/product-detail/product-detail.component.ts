import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productId;
  product: Product;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private router: Router) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {

      this.productId = params.get('id');
      this.getProductDetail(this.productId);
     
    });

  }

  getProductDetail(productId) {

    this.productService.getProductById(productId).subscribe((product) => {
      this.product = product;
    });

  }

  onBack() {

    this.router.navigate(['products']);

  }

}
