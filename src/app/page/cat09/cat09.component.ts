import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat09',
  templateUrl: './cat09.component.html',
  styleUrls: ['./cat09.component.scss']
})
export class Cat09Component implements OnInit {

  listByCatId: Product[] = this.productService.getAllbyCatId(9)

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

}
