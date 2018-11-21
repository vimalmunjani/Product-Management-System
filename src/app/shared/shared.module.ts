import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { StockStatusComponent } from './stock-status/stock-status.component';

@NgModule({
  declarations: [StarRatingComponent, StockStatusComponent],
  imports: [
    CommonModule
  ],
  exports: [
    StarRatingComponent,
    CommonModule
  ]
})
export class SharedModule { }
