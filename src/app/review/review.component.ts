import { Component, OnInit } from '@angular/core';
import { ReviewServiceService } from '../ReviewService/review-service.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  reviews = [];
  reviewErrorMsg = '';
  searchText: string = '';
  SortbyParam: string = '';
  SortDirection: string = 'asc';

  constructor(private reviewService: ReviewServiceService) { }

  ngOnInit(): void {
    this.reviewService.getReviews().subscribe(
      success => this.reviews = success,
      error => this.reviewErrorMsg = error
    )
  }

  onSortDirection() {
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
  }

}
