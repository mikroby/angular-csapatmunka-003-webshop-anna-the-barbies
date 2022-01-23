import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})

export class ProductCardComponent implements OnInit {
  @Input() currentProduct: Product = new Product();

  src: string = "";

  constructor() { }

  ngOnInit(): void {
    this.src=`/assets/img/${this.currentProduct.image}`;
  }
}
