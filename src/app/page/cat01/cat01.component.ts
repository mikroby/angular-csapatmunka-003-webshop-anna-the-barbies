import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {

  // catFeaturedAll: Observable<Product[]> = this.productService.getAllFeaturedByCatId(1);
  // catFeaturedToDisplay: Product[] = this.productService.getRandom(this.catFeaturedAll);
  listByCatId: Observable<Product[]> = this.productService.getAllbyCatId(1);

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {



  }

}
