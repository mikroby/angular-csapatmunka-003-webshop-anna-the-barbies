import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat10',
  templateUrl: './cat10.component.html',
  styleUrls: ['./cat10.component.scss']
})
export class Cat10Component implements OnInit {

  catPage:number = 10;

  catFeaturedToDisplay: Product[] = [new Product()];
  listByCatId: Product[] = [new Product()];

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {

    this.productService.getAllFeaturedByCatId(this.catPage).subscribe(
      catFeaturedAll => this.catFeaturedToDisplay = this.productService.getRandom(catFeaturedAll)
    );

    this.productService.getAllbyCatId(this.catPage).subscribe(
      allByCatId => this.listByCatId = allByCatId
    );

  }

}
