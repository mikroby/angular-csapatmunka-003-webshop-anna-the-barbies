import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat08',
  templateUrl: './cat08.component.html',
  styleUrls: ['./cat08.component.scss']
})
export class Cat08Component implements OnInit {

  listByCatId: Product[] = this.productService.getAllbyCatId(8)

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

}
