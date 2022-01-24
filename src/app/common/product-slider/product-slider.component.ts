import { Product } from './../../model/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent implements OnInit {

  @Input() list: Product[] = [new Product()];

  constructor() { }

  ngOnInit(): void {
  }

}
