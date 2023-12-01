import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css'],
})
export class CardPricingComponent implements OnInit {
  @Input()
  gameType: String = '';
  @Input()
  gamePrice: String = '';
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
