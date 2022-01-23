import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

}
