import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat07',
  templateUrl: './cat07.component.html',
  styleUrls: ['./cat07.component.scss']
})
export class Cat07Component implements OnInit {

  catFeaturedAll: Product[] = this.productService.getAllFeaturedByCatId(7);
  catFeaturedToDisplay: Product[] = this.productService.getRandom(this.catFeaturedAll);
  listByCatId: Product[] = this.productService.getAllbyCatId(7)

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

}
