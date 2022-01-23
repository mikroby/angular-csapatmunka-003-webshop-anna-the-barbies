import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat06',
  templateUrl: './cat06.component.html',
  styleUrls: ['./cat06.component.scss']
})
export class Cat06Component implements OnInit {

  listByCatId: Product[] = this.productService.getAllbyCatId(6)

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

}
