import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat06',
  templateUrl: './cat06.component.html',
  styleUrls: ['./cat06.component.scss']
})
export class Cat06Component implements OnInit {

  catPage:number = 6;

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