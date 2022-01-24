import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat05',
  templateUrl: './cat05.component.html',
  styleUrls: ['./cat05.component.scss']
})
export class Cat05Component implements OnInit {

  catFeaturedAll: Product[] = this.productService.getAllFeaturedByCatId(5);
  catFeaturedToDisplay: Product[] = this.productService.getRandom(this.catFeaturedAll);
  listByCatId: Product[] = this.productService.getAllbyCatId(5)

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

}
