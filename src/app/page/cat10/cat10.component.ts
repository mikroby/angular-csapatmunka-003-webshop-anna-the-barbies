import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat10',
  templateUrl: './cat10.component.html',
  styleUrls: ['./cat10.component.scss']
})
export class Cat10Component implements OnInit {

  catFeaturedAll: Product[] = this.productService.getAllFeaturedByCatId(10);
  catFeaturedToDisplay: Product[] = this.productService.getRandom(this.catFeaturedAll);
  listByCatId: Product[] = this.productService.getAllbyCatId(10)

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

}
