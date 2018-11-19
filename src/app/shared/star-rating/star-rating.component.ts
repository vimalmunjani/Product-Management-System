import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges {
  
  @Input() rating = 0;
  starWrapperWidth = 0;
  
  @Output() ratingClicked: EventEmitter<string> =
    new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWrapperWidth = this.rating * 90 / 5;
  }

  onClick(): void {
    console.log('rating was clicked');
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}
