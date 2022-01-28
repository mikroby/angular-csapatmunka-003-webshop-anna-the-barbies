import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})

export class ProductCardComponent implements OnInit {
  @Input() currentProduct: Product = new Product();
 
  src: string = "";

  constructor(
    private ar: ActivatedRoute,
    private productService: ProductService
    ) { }

  ngOnInit(): void {
    this.src=`/assets/img/${this.currentProduct.image}`;
  }
}
