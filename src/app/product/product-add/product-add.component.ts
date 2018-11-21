import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm: FormGroup;

  constructor(private router: Router,
              private productService: ProductService) { }

  ngOnInit() {

    this.productAddForm = new FormGroup({

      productId: new FormControl(null, {
        validators: [Validators.required
      ]}),

      productName: new FormControl(null, {
        validators: [Validators.required
      ]}),

      productCode: new FormControl(null, {
        validators: [Validators.required
      ]}),

      
      category: new FormControl(null, {
        validators: [Validators.required
      ]}),

      tags: new FormControl(null, {
        validators: [Validators.required
      ]}),

      releaseDate: new FormControl(null, {
        validators: [Validators.required
      ]}),

      price: new FormControl(null, {
        validators: [ Validators.required
      ]}),

      description: new FormControl(null, {
        validators: [Validators.required
      ]}),

      available: new FormControl(null, {
        validators: [Validators.required, 
      ]}),

      threshold: new FormControl(null, {
        validators: [Validators.required
      ]}),

      starRating: new FormControl(null, {
        validators: [Validators.required, Validators.min(1), Validators.max(5)
      ]}),

      imageUrl: new FormControl(null, {
        validators: [Validators.required,
      ]}),


    });

  }

  onBack() {

    this.router.navigate(['']);

  }

  onSubmit() {

    console.log(JSON.stringify(this.productAddForm.valid));
    if(this.productAddForm.invalid) {
      return;
    }

    console.log('submit ', this.productAddForm.value);
      this.productService.addProduct(this.productAddForm.value).subscribe(res => {
          console.log('response -', res);
          this.router.navigate(['products']);
      });

  }

}
