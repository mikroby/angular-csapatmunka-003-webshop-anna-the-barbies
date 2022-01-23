import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat05',
  templateUrl: './cat05.component.html',
  styleUrls: ['./cat05.component.scss']
})
export class Cat05Component implements OnInit {

  listByCatId: Product[] = this.productService.getAllbyCatId(5)

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

}
