import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductModule { }
